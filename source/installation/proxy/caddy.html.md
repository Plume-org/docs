---
title: Configuring Caddy
---

The Caddy configuration is very short.

```
DOMAIN_NAME {
    proxy / localhost:7878 {
        transparent
    }
}
```

Don't forget to replace `DOMAIN_NAME` with your own domain.

Restart Caddy, and your Plume instance should be accessible!