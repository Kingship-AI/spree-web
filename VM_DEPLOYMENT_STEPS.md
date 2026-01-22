# VM Deployment Steps for Spree Landing Page

This guide outlines the steps to deploy the new `spree-web` landing page to your VM, replacing the existing `kingship-frontend`.

**Assumptions:**
- You have SSH access to `kingship@4.242.5.141`.
- Docker and Docker Compose are installed on your VM.
- Your SSL certificates (`fullchain.pem` and `privkey.pem`) are available on the VM in a `certs` directory within your deployment path (e.g., `/workspace0116/spree-web/certs`).

---

## Step 1: Connect to your VM

```bash
ssh kingship@4.242.5.141
# Enter your password when prompted
```

---

## Step 2: Clone the new `spree-web` repository

Navigate to your desired workspace directory (e.g., `/workspace0116/`) and clone the new repository.

```bash
cd /workspace0116/
git clone https://github.com/Kingship-AI/spree-web.git
cd spree-web
```

**Note:** If you haven't pushed your local changes to `https://github.com/Kingship-AI/spree-web.git` yet, do so first from your local machine:
```bash
# On your local machine, in the spree-web directory
git init
git add .
git commit -m "Initial commit: Spree landing page with SEO optimizations"
git remote add origin https://github.com/Kingship-AI/spree-web.git
git branch -M main
git push -u origin main
```

---

## Step 3: Place SSL Certificates

Ensure your SSL certificates (`fullchain.pem` and `privkey.pem`) are in a `certs` directory within the `spree-web` project on the VM.

For example, if your `spree-web` project is at `/workspace0116/spree-web`, then the certificates should be at:
- `/workspace0116/spree-web/certs/fullchain.pem`
- `/workspace0116/spree-web/certs/privkey.pem`

You might need to `scp` them from your local machine if they are not already on the VM:
```bash
# On your local machine
scp /path/to/your/certs/fullchain.pem kingship@4.242.5.141:/workspace0116/spree-web/certs/
scp /path/to/your/certs/privkey.pem kingship@4.242.5.141:/workspace0116/spree-web/certs/
```

Create the `certs` directory if it doesn't exist:
```bash
# On the VM
mkdir -p /workspace0116/spree-web/certs
```

**Alternative:** If you already have certificates in the old frontend, you can copy them:
```bash
# On the VM
cp /workspace0116/MVP-frontend/certs/* /workspace0116/spree-web/certs/
```

---

## Step 4: Stop and Remove the Old Frontend (Optional but Recommended)

If you want to completely replace the old `kingship-frontend`, stop and remove its Docker container.

```bash
cd /workspace0116/MVP-frontend # Or wherever your old frontend is located
sudo docker compose down
# You might also want to remove the old image:
# sudo docker rmi kingship-frontend_kingship-frontend # Check image name with `sudo docker images`
```

---

## Step 5: Deploy the New `spree-web` Frontend

Navigate to the `spree-web` directory and start the Docker Compose services.

```bash
cd /workspace0116/spree-web
sudo docker compose up --build -d
```

Or use the npm script:
```bash
sudo npm run prod-start
```

The Docker Compose will:
1. Build the Docker image for `spree-web` using the `Dockerfile`.
2. Start the `spree-web` container, mapping port `3000` on the host to port `443` (HTTPS) in the container.
3. The `serve` command inside the container will serve your React app with SSL.

---

## Step 6: Verify Deployment

1. Check if the container is running:
   ```bash
   sudo docker ps
   ```
   You should see `spree-web` listed with port `0.0.0.0:3000->443/tcp`.

2. Check container logs for any errors:
   ```bash
   sudo docker logs spree-web
   ```

3. Access your site:
   Open your browser and navigate to `https://4.242.5.141:3000` (or your domain if configured in DNS to point to the VM's IP and the port is accessible).

---

## Step 7: Update Domain Configuration (If Applicable)

If you're using a custom domain (e.g., `spree.ai`), make sure:
- DNS records point to your VM's IP address (`4.242.5.141`)
- The domain is configured to use port 3000, or you've set up a reverse proxy/load balancer

---

## Troubleshooting

- **Port conflicts**: If port 3000 is already in use, change it in `docker-compose.yml` (e.g., `"8080:443"` if you want to serve on port 8080).
- **Certificate issues**: Ensure `fullchain.pem` and `privkey.pem` are correctly placed in the `certs` directory and have the right permissions:
  ```bash
  chmod 644 /workspace0116/spree-web/certs/fullchain.pem
  chmod 600 /workspace0116/spree-web/certs/privkey.pem
  ```
- **Container errors**: Check container logs: `sudo docker logs spree-web`
- **Build errors**: If the build fails, check the build logs: `sudo docker compose build`
- **Firewall**: Ensure port 3000 (or your chosen port) is open in your VM's firewall.
- **Permission issues**: If you encounter permission issues, you might need to run with `sudo` or adjust file permissions.

---

## Updating the Site

To update the site after making changes:

```bash
cd /workspace0116/spree-web
git pull
sudo docker compose up --build -d
```

This will rebuild the container with the latest changes.

---

## Notes

- The Dockerfile uses `serve` (a simple static file server) instead of Nginx, matching your existing `MVP-frontend` setup.
- SSL certificates are copied into the container during the build process.
- The container runs on port 443 internally and is mapped to port 3000 on the host.
- The site is served with HTTPS using the provided SSL certificates.
