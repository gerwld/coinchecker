user              nginx;
worker_processes  1;
error_log         /var/log/nginx/error.log warn;
pid               /var/run/nginx.pid;

events {
  worker_connections  1024;
}

http {

  server {
    listen 80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;
    include /etc/nginx/mime.types;

    gzip on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
       try_files $uri $uri/ /index.html;
    }

    location /api/core {
      proxy_pass http://$CORE_SERVICE_HOST:8000;
      client_max_body_size 10000M;
      proxy_redirect     off;
      proxy_set_header   Host $host;
    }
  }
}
