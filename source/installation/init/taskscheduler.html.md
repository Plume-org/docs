---
title: Configuring Task Scheduler
---

If you want to start your Plume instance on system startup, you can use Task Scheduler
in order to do so. To configure, use the following options when creating a task:

1. Open up the Task Scheduler app
2. On right hand side, choose Create Task
3. **General tab** - Name: "Plume"; Description: "Plume: a federated blogging application"; Run whether user is logged on or not; Run with highest privileges; Configure for Windows 10
4. **Triggers tab** - Begin the task At startup; Optionally Delay task for 30 seconds; Enabled
5. **Actions** - Action: Start a program; Browse to plume.exe (default is C:\Users\%USERNAME%\.cargo\bin\plume.exe); Start in: C:\path\to\.env
6. **Conditions** - Uncheck everything
7. **Settings** - Allow task to be run on demand; Run task as soon as possible after a scheduled start is missed; If the running task does not end when requested, for it to stop; Do not start a new instance

If everything works fine, the last step before you can use your Plume instance
is to configure a reverse-proxy.

<a class="action" href="/installation/proxy">Reverse-proxy configuration</a>