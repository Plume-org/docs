---
title: Configuring Nginx
---

Here is a sample Nginx configuration for a Plume instance (replace `DOMAIN_NAME` with your domain name):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name DOMAIN_NAME;

    location /.well-known/acme-challenge {}
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name DOMAIN_NAME;

    access_log  /var/log/nginx/access.log;
    root /home/plume/Plume/ ;

    ssl_certificate /etc/letsencrypt/live/DOMAIN_NAME/chain.pem;
    ssl_certificate_key /etc/letsencrypt/live/DOMAIN_NAME/privkey.pem;

    # for ssl conf: https://cipherli.st/
    ssl_protocols TLSv1.2 TLSv1.3;# Requires nginx >= 1.13.0 else use TLSv1.2
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;# openssl dhparam -out /etc/letsencrypt/ssl-dhparam.pem 4096
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
    ssl_session_timeout  10m;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off; # Requires nginx >= 1.5.9
    ssl_stapling on; # Requires nginx >= 1.3.7
    ssl_stapling_verify on; # Requires nginx => 1.3.7
    resolver 9.9.9.9 80.67.169.12 valid=300s;
    resolver_timeout 5s;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Content-Security-Policy "default-src 'self' 'unsafe-inline'; frame-ancestors 'self'; frame-src https:";

    location / {
        proxy_pass http://localhost:7878/;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 10m;
        if ($request_method ~* "(GET)") {
          add_header "Access-Control-Allow-Origin"  *;
        }

    }
}
```

Restart Nginx, and your Plume instance should be accessible!
