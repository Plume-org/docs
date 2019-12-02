---
title: Installing from the Snap store
---

Plume is available on the [Snap Store](https://snapcraft.io/plume).
The snap package is isolated from your host and will automatically update, running any necessary migration
tasks.

If you already have `snapd` installed, you can install Plume with `sudo snap install --edge plume`.
More information, including instructions for installing `snapd` on your distro, can be found
on Plume's entry on the [Snap Store](https://snapcraft.io/plume).

### Configuring the Plume snap

The Plume snap uses the native snap configuration interfaces to handle setup.

The minimal set up is `sudo snap set plume db.type=sqlite base-url=example.com`
followed by `sudo snap set plume enabled=true`.

This sets the base snap configuration; now you must configure your instance:

`sudo plume.plm instance new -d 'domain.name' -n 'instance name' -l 'default licence'`
`sudo plume.plm users new -n 'admin' -N 'name' -b 'bio' -e 'admin@domain.name' -p 'pass' --admin`
`sudo plume.plm search init`

And that's it! You can now setup a reverse-proxy to access Plume from other machines
than your server (which is probably what you want 😁).

<a class="action" href="/installation/proxy">Configure a reverse-proxy</a>
