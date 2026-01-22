# VM Deployment Guide for spree-web

## Step 1: Check Current Setup

SSH into your VM and run these commands to check the current setup:

```bash
ssh kingship@4.242.5.141
cd /workspace0116/MVP-frontend
ls -la
cat package.json | head -20
cat docker-compose.yml
cat Dockerfile
ls -la nginx.conf
```

Please share the output so I can understand:
- How the old frontend is structured
- What Docker/nginx setup exists
- What ports/services are configured

## Step 2: Deployment Options

Once I see the current setup, I'll provide exact commands to:
1. Set up the new spree-web project
2. Configure it to work with your existing infrastructure
3. Update any necessary config files

## What I Need to Know

1. **Current directory structure** - What's in `/workspace0116/MVP-frontend`?
2. **Docker setup** - Does it use Docker? What's the setup?
3. **Nginx config** - How is it serving the frontend?
4. **Port configuration** - What ports are being used?
5. **Domain/URL** - What URL will the new site be served at?

Please run the commands above and share the output, then I'll give you the exact deployment steps!
