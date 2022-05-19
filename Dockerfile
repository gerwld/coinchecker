# Using node version 14.18
# Create context directory
#
# Copy required files that required to build to context
# Install all dependencies except optional
#
# Copy required source files to context
# Build project
# Pass only production dependencies using npm prune
# Remove source and service files from container
#
# PORT must be specfied in .env
# Run production version

FROM node:14.18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --ignore-optional

COPY ./src ./src
COPY ./public ./public
RUN npm run build
RUN npm prune --production
RUN rm -rf src package-lock.json

# Using stable nginx
#
# Remove default nginx configuration
# Copy custom configuration to nginx configuration directory
# Copy builded project to nginx host directory
# Run nginx in foreground
FROM nginx:latest


ENV CORE_SERVICE_HOST='127.0.0.1'
COPY run.sh /run.sh
COPY nginx.conf.tpl /nginx.conf.tpl

RUN  rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build/. /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443
ENTRYPOINT ["sh","/run.sh"]