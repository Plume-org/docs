---
title: Updating pre-built binaries
---

Prebuilt binaries are only available for 64 bits Linux machines.

You'll need to define these two variables in your shell first:

- `PLUME_VERSION`: the Plume version to install. The latest is `0.4.0-alpha-4`.
- `PLUME_DB`: the database backend to use. Either `postgres` or `sqlite`.

Then run these commands:

```bash
# Go Plume's directory
cd Plume

# Download the files
wget -O plume.tar.gz https://github.com/Plume-org/Plume/releases/download/$PLUME_VERSION/plume-$PLUME_DB.tar.gz
# Extract them
tar -xf plume.tar.gz
mv bin/* ~/.cargo/bin/
# Make sure they are executable
chmod +x ~/.cargo/bin/*

# Clean useless files
rm plume.tar.gz
rmdir bin

# Run migrations
plm migration run
```

To check that everything went well, you can run `plume --version`, which should show the new version number.

You can now restart your instance:

```bash
# If you are using sysvinit
sudo service plume restart

# If you are using systemd
sudo systemctl restart plume
```
