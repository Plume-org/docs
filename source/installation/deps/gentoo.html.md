---
title: Dependencies on Gentoo
---

```bash
emerge --sync

# If you want PostgreSQL
emerge -avu dev-db/postgresql dev-vcs/git sys-devel/gettext sys-devel/clang

# If you want SQlite
emerge -avu dev-db/sqlite dev-vcs/git sys-devel/gettext sys-devel/clang
```

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="/installation/deps/rust">Let's do it!</a>
