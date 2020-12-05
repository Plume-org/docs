---
title: Updating pre-built binaries
---

Prebuilt binaries are only available for 64 bits Linux machines.

You'll need to define a variable in your shell first:

- `DOWNLOAD_URI`: URI of archived binary file. You may find it at https://git.joinplu.me/Plume/Plume/releases. It includes database name `postgresP or `sqlite` in the file name. Choose which you want.

Then run these commands:

```bash
# Go Plume's directory
cd Plume

# Download the files
wget -O plume.tar.gz $DOWNLOAD_URI
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
