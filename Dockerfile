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

# Production stage
RUN npm install -g serve
COPY certs/fullchain.pem fullchain.pem
COPY certs/privkey.pem privkey.pem
CMD ["serve", "-s", "build", "--ssl-cert", "fullchain.pem", "--ssl-key", "privkey.pem", "-l", "443"]
