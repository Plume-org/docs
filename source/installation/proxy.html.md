---
title: Choose your reverse proxy
---

The reverse-proxy is the program in charge of redirecting requests on your server
to your Plume instance. It is especially useful if you have other services running
on the same machine, so that people are redirected to the correct one. Please choose
your reverse proxy in this list:

<ul class="choices">
  <li><a href="/installation/proxy/caddy">Caddy</a></li>
  <li><a href="/installation/proxy/nginx">Nginx</a></li>
  <li><a href="/installation/proxy/apache">Apache</a></li>
  <li><a href="/installation/proxy/iis">IIS</a></li>
  <li><a href="/installation/proxy/none">No reverse-proxy</a></li>
</ul>

If you don't have a reverse-proxy on your server yet but want one, we recommend
Caddy as the configuration is really simple.

## How to know which reverse proxy I have?

This command should give you (most of the time) what your reverse-proxy is.

```bash
sudo netstat -tlnup | grep :80
```
