---
title: Configuring systemd
---

If you want to manage your Plume instance with systemd, you can use the following
unit file (to be saved in `/etc/systemd/system/plume.service`):

```ini
[Unit]
Description=plume

[Service]
Type=simple
User=plume
WorkingDirectory=/home/plume/Plume
ExecStart=/home/plume/.cargo/bin/plume
TimeoutSec=30
Restart=always

[Install]
WantedBy=multi-user.target
```

Now you need to enable all of these services:

```bash
systemctl enable /etc/systemd/system/plume.service
```

Now start the services:

```bash
systemctl start plume.service
```

Check that they are properly running:

```bash
systemctl status plume.service
```

If everything works fine, the last step before you can use your Plume instance
is to configure a reverse-proxy.

<a class="action" href="../../proxy/">Reverse-proxy configuration</a>