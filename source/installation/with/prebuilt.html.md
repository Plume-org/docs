---
title: Installing pre-built binaries
---

This installation method is only available for 64 bits Linux machines. Pre-built binairies
for other platforms may come in the future.

You will need to have `wget` installed for this method to work.

To download and install the latest release, first define the following variables in your shell:

- `PLUME_VERSION`: the Plume version to install. The latest is `0.3.0-alpha-2`.
- `PLUME_DB`: the database backend to use. Either `postgres` or `sqlite`.

Then run these commands:

```bash
# Create a directory to store executables (this is the standard place for Rust binaries)
mkdir -p ~/.cargo/bin
# Create a directory to store static files and database config
mkdir Plume
cd Plume

# Download diesel, a tool Plume requires to manage the database
wget -O ~/.cargo/bin/diesel TODO
# Download plume and plm (a command line helper for Plume)
wget -O ~/.cargo/bin/plume TODO
wget -O ~/.cargo/bin/plume TODO
# Download front-end files, and database migrations
wget -O assets.tar.gz TODO
# Extract them
tar -xvzf assets.tar.gz
rm assets.tar.gz

# Make sure they are executable
chmod +x ~/.cargo/bin/*

# Add them to your path, so that you can run them (you may want to edit your ~/.bashrc too)
PATH=$PATH:~/.cargo/bin/
```

To check that everything went well, you can run `plm --help`. It should show an help message.

If everything is working, you can configure your instance.

<a class="action" href="/installation/config">Configuration</a>
