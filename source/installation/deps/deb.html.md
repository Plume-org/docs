---
title: Dependencies on Debian & Co
---

First, make sure your computer is aware of the latest availabel versions of installable
packages. This command, and the other on this page, may require super-user rights, so
you may want to prefix them by `sudo`.

```bash
apt update
```

Then, the command to actually install dependencies depends on the database backend you
want to use.

If you want **PostgreSQL**, use:

```
apt install postgresql postgresql-contrib libpq-dev gettext git curl gcc make openssl libssl-dev pkg-config
```

If you prefer to use **SQlite**:

```
apt install libsqlite3-dev gettext git curl gcc make openssl libssl-dev pkg-config
```

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="/installation/deps/rust">Let's do it!</a>