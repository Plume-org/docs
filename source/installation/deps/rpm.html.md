---
title: Installing dependencies on RPM-based systems
---

```bash
# If you want PostgreSQL
dnf install postgresql-server postgresql-contrib libpqxx libpqxx-devel libpq-devel lib git curl gcc make openssl openssl-devel gettext clang-devel

# If you want SQLite
dnf install libsq3-devel sqlite3 libsqlite3-dev git curl gcc make openssl openssl-devel gettext clang-devel
```

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="/installation/deps/rust">Let's do it!</a>
