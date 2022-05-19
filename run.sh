#!/bin/bash

echo "Copying nginx config"
envsubst '$CORE_SERVICE_HOST' < /nginx.conf.tpl > /nginx.conf

echo "Using nginx config:"
cat /nginx.conf

echo "Starting nginx"
nginx -c /nginx.conf -g "daemon off;"
