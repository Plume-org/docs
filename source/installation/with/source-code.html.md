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
# Install diesel, a tool to manage your database
# Replace DATABASE with either postgres or sqlite depending on what you want to use
cargo install diesel_cli --no-default-features --features DATABASE --version '=1.3.0'

# Build the front-end
cargo install cargo-web
cargo web deploy -p plume-front

# Build the back-end, replacing DATABASE with your choice from installing diesel
cargo install --no-default-features --features DATABASE

# Build plm, the CLI helper, replacing DATABASE again
cargo install --no-default-features --features DATABASE --path plume-cli
```

These commands can take a long time to run and use quite a lot of resources.

Once it's done, you can configure your instance.

<a class="action" href="/installation/config">Configuration</a>
