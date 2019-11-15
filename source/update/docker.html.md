---
title: Updating with Docker
---

To update your dockerized Plume instance, replace the version tag with `v0.4.0` in your `docker-compose.yml`
Then, run:

```bash
# Grab the latest images
docker-compose pull

# Stop your instance
docker-compose down

# Run migrations
docker-compose run --rm plume plm migration run

# Restart your instance
docker-compose up -d
```

And you are done!
