---
title: Compiling from source
---

The first step to compile Plume's source code is to get it.

```bash
git clone https://github.com/Plume-org/Plume.git
cd Plume
```

Then, you'll need to install Plume and the CLI tools to manage your instance.
Run the following commands.

```bash
# Build the front-end
cargo install cargo-web
cargo web deploy -p plume-front --release

# Build the back-end, replacing DATABASE either with
# postgres or sqlite depending on what you want to use
cargo install --no-default-features --features DATABASE -f

# Build plm, the CLI helper, replacing DATABASE again
cargo install --no-default-features --features DATABASE --path plume-cli -f
```

These commands can take a long time to run and use quite a lot of resources.

Once it's done, you can configure your instance.

<a class="action" href="/installation/config">Configuration</a>
