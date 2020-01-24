---
title: Configuring IIS
---

If you want to use Plume for a **subdomain**, follow these instructions.

1. You need to have installed URL Rewrite
2. From the Sites, choose your site, in the middle pane, double click URL Rewrite
3. On right hand side, Add Rule, Blank Rule
4. Name it Plume with pattern (.*) with Action type Rewrite and Rewrite URL of http://127.0.0.1:7878/{R:1}
5. Apply

If you want to use Plume for a **subdirectory**, follow these instructions (experimental).

1. Create a Server Farm called Plume, with a server of localhost, and a http port of 7878
2. You then need to install [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing) in IIS
3. After installing double click on your server name, then Applications Request Routing Cache
4. On right hand side, select Server Proxy Settings...
5. Enable the proxy; HTTP version Pass through; under Proxy Type, check Use URL Rewrite to inspect incoming requests; check Enable SSL offloading; and for Reverse proxy use the name of your server farm: Plume
6. Apply (it may ask you to create default URL Rewrite, say yes or ok to the prompt)
7. Then on right hand side, select URL Rewrite...
8. Should be something called either ARR_Plume_loadbalance or ARR_server_proxy: click on it and on right side select Edit...
9. Pattern should be Regular Expression with pattern of `^plume$|^plume/(.*)` where "plume" is the subdirectory you want to use
10. Action type should be Route to Server Farm, Scheme http://, Server farm Plume, Path /{R:1}