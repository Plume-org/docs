---
title: Choose your init system
---

The init system is the first program to start when a computer boots. Its role is
to start other program automatically and to let you manage them more easily.

<ul class="choices">
  <li><a href="/installation/init/systemd">SystemD</a></li>
  <li><a href="/installation/init/sysvinit">SysVInit</a></li>
  <li><a href="/installation/init/openrc">OpenRC</a></li>
  <li><a href="/installation/init/taskscheduler">Task Scheduler</a></li>
</ul>

## How to know which init system I have?

You can use this little script.

```bash
if [[ `systemctl` =~ -\.mount ]]; then echo "SystemD";
elif [[ -f /etc/init.d/cron && ! -h /etc/init.d/cron ]]; then echo using "SysVInit";
else echo "Can't tell"; fi
```

[(Found here)](https://unix.stackexchange.com/a/164092)
