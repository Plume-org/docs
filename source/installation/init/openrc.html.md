---
title: Configuring OpenRC
---

This script can also be useful if you are using OpenRC.

```bash
#! /sbin/openrc-run
name="plume"
description="plume : federated blogging"
pidfile=/run/plume
start() {
ebegin "Starting plume"
start-stop-daemon -v --start --exec "/home/plume/.cargo/bin/cargo run" --user "plume" --chdir "/home/plume/Plume" --background --stdout "/var/log/plume.log" --stderr "/var/log/plume.err" --make-pidfile --pidfile "/run/plume" -- "phx.server"
eend $?
}

stop() {
ebegin "Stopping plume"
start-stop-daemon --stop --user "plume" --chdir "/home/plume/Plume" --pidfile "/run/plume"
eend $?
}
```
Now you need to enable all of these services:

```bash
 rc-update add plume
```

Now start the services:

```bash
/etc/init.d/plume start
```

If everything works fine, the last step before you can use your Plume instance
is to configure a reverse-proxy.

<a class="action" href="../../proxy/">Reverse-proxy configuration</a>