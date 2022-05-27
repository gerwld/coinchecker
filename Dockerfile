FROM node:14.18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --ignore-optional

COPY ./src ./src
COPY ./public ./public
RUN npm run build
RUN npm prune --production
RUN rm -rf src package-lock.json


FROM nginx:latest


ENV CORE_SERVICE_HOST='127.0.0.1'
COPY run.sh /run.sh
COPY nginx.conf.tpl /nginx.conf.tpl

RUN  rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build/. /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443
ENTRYPOINT ["sh","/run.sh"]