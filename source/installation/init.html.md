---
title: Choose your init system
---

The init system is the first program to start when a computer boots. Its role is
to start other program automatically and to let you manage them more easily. The
recommended option for Windows is Task Scheduler.

<ul class="choices">
  <li><a href="systemd/">SystemD</a></li>
  <li><a href="sysvinit/">SysVInit</a></li>
  <li><a href="openrc/">OpenRC</a></li>
  <li><a href="taskscheduler/">Task Scheduler</a></li>
</ul>

## How to know which init system I have?

You can use this little script.

```bash
if [[ `systemctl` =~ -\.mount ]]; then echo "SystemD";
elif [[ -f /etc/init.d/cron && ! -h /etc/init.d/cron ]]; then echo using "SysVInit";
else echo "Can't tell"; fi
```

[(Found here)](https://unix.stackexchange.com/a/164092)
