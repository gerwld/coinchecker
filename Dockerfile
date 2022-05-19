FROM nginx:latest

# set working directory
WORKDIR /app
RUN npm install
RUN npm run build
COPY ./build .
RUN  rm -rf /usr/share/nginx/html/* && cp -R /app/* /usr/share/nginx/html/

ENV CORE_SERVICE_HOST='127.0.0.1'
COPY run.sh /run.sh
COPY nginx.conf.tpl /nginx.conf.tpl

ENTRYPOINT ["sh","/run.sh"]