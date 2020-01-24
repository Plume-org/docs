---
title: Configuring Apache
---

If you prefer Apache, you can use this configuration (replace `DOMAIN_NAME` with your domain):

```apache
<VirtualHost *:80>
    ServerName DOMAIN_NAME
    Redirect / https://DOMAIN_NAME/
</VirtualHost>
SSLStaplingCache "shmcb:logs/stapling-cache(150000)"
<VirtualHost *:443>
   ServerAdmin admin@example.com
   ServerName DOMAIN_NAME
<Directory "/home/plume/Plume">
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Strict-Transport-Security "max-age=31536000"
    </Directory>
    SSLEngine on

    # for cipher conf: https://cipherli.st/
    SSLCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
    SSLProtocol All -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
    SSLHonorCipherOrder On
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    SSLCompression off
    SSLUseStapling on

    # Requires Apache >= 2.4.11
    SSLSessionTickets Off

    # Disable http/1.0
    # Requires Apache >= 2.4.17
    Protocols h2 http/1.1

    SSLCertificateFile /etc/letsencrypt/live/DOMAIN_NAME/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/DOMAIN_NAME/privkey.pem
    SSLCertificateChainFile /etc/letsencrypt/live/DOMAIN_NAME/chain.pem

    ProxyPreserveHost On
    RequestHeader set X-Forwarded-Proto "https"

    ProxyPass / http://127.0.0.1:7878/
    ProxyPassReverse / http://127.0.0.1:7878/
</VirtualHost>
```

Restart Apache, and your Plume instance should be accessible!

## Using mod_md

Since Apache httpd 2.4.30, there's a new *experimental* module called [mod_md](https://httpd.apache.org/docs/current/mod/mod_md.html) that helps ease the configuration of Let's Encrypt vhosts. Again replace `DOMAIN_NAME` with your domain:

```apache
MDBaseServer on
MDCertificateAgreement https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf
MDRequireHttps permanent    # This means our http vhost will be automatically redirect to https
ServerAdmin you@DOMAIN_NAME # This is required to register with Let's Encrypt

MDomain DOMAIN_NAME auto

<VirtualHost *:80>
    ServerName DOMAIN_NAME
<VirtualHost>

<VirtualHost *:443>
    ServerName DOMAIN_NAME
    ProxyPass / http://127.0.0.1:7878/
    ProxyPassReverse / http://127.0.0.1:7878/
    SSLEngine On
<VirtualHost>
```
