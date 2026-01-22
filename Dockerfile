# Build stage
FROM node:lts-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV GENERATE_SOURCEMAP=false
ENV NODE_ENV=production
RUN npm run build

# Production stage
RUN npm install -g serve
COPY certs/fullchain.pem fullchain.pem
COPY certs/privkey.pem privkey.pem
CMD ["serve", "-s", "build", "--ssl-cert", "fullchain.pem", "--ssl-key", "privkey.pem", "-l", "443"]

# Alternative: Nginx production stage (commented out, using serve instead)
# FROM nginx:stable-alpine3.19-slim
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY /certs/fullchain.pem /etc/nginx/ssl/fullchain.pem
# COPY /certs/privkey.pem /etc/nginx/ssl/privkey.pem
# EXPOSE 443
# CMD ["nginx", "-g", "daemon off;"]
