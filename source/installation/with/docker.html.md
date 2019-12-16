---
title: Installing with Docker
---

You can use `docker` and `docker-compose` in order to manage your Plume instance
and have it isolated from your host.

If you don't have `docker` and `docker-compose` installed yet, here are their respective
installation documentation: [`docker`](https://docs.docker.com/install/) and
[`docker-compose`](https://docs.docker.com/compose/install/).

Then use these commands:

```bash
mkdir plume
cd plume

# Get the docker-compose configuration and Plume's configuration
curl https://docs.joinplu.me/docker-compose.sample.yml > docker-compose.yml
# If you are on an ARM machine, use the image from the Lollipop Cloud project instead
curl https://docs.joinplu.me/docker-compose.sample.arm32v7.yml > docker-compose.yml
# Or
curl https://docs.joinplu.me/docker-compose.sample.arm64v8.yml > docker-compose.yml


curl https://docs.joinplu.me/docker.sample.env > .env
```

You should edit the freshly created `.env` file as it contains the configuration
of your Plume instance. The options at the top especially should be modified.

Once it's done, you can finalize the installation.

```bash
# Download the images
docker-compose pull

# Launch the database container
docker-compose up -d postgres
# Wait for postgres init (user docker-compose logs to get postgres output)
# Database setup, first migration run
docker-compose run --rm plume plm migration run

# Setup your instance
docker-compose run --rm plume plm search init
docker-compose run --rm plume plm instance new -d 'domain.name' -n 'instance name' -l 'default licence'
docker-compose run --rm plume plm users new -n 'admin' -N 'name' -b 'bio' -e 'admin@domain.name' -p 'pass' --admin

# Launch your instance for good
docker-compose up -d
```

And that's it! You can now setup a reverse-proxy to access Plume from other machines
than your server (which is probably what you want 😁).

<a class="action" href="/installation/proxy">Configure a reverse-proxy</a>
