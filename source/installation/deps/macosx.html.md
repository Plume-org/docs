---
title: Installing dependencies on Mac OS X
---

With [Homebrew](https://brew.sh/):

```bash
brew update

brew install git llvm
brew link gettext --force

# Additionally, only for PostgreSQL
brew install postgres
```

Now that these dependencies have been installed, we need to install Rust which has a special installer.

<a class="action" href="/installation/deps/rust">Let's do it!</a>
