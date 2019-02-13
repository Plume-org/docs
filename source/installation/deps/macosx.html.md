---
title: Installing dependencies on Mac OS X
---

With [Homebrew](https://brew.sh/):

```bash
brew update

# For PostgreSQL
brew install postgres gettext git

# For SQlite (already present, so only GetText and Git are needed)
brew install gettext git
```

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="/installation/deps/rust">Let's do it!</a>