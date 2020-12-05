---
title: Configuring Caddy
---

The Caddy v1 configuration is very short.

```
DOMAIN_NAME {
    proxy / localhost:7878 {
        transparent
    }
}
```

The Caddy v2 configuration is shorter.

```
DOMAIN_NAME {
	reverse_proxy localhost:7878
}
```

Don't forget to replace `DOMAIN_NAME` with your own domain.

Restart Caddy, and your Plume instance should be accessible!
