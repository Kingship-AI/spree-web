# Build stage
FROM node:lts-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV GENERATE_SOURCEMAP=false
ENV NODE_ENV=production
# Accept build argument for API URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Production stage - Using Nginx with API proxy
FROM nginx:stable-alpine3.19-slim
COPY --from=builder /app/build /usr/share/nginx/html
# Create SSL directory
RUN mkdir -p /etc/nginx/ssl
COPY nginx.conf /etc/nginx/nginx.conf
COPY certs/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY certs/privkey.pem /etc/nginx/ssl/privkey.pem
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
