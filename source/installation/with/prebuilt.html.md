---
title: Installing pre-built binaries
---

This installation method is only available for 64 bits Linux machines. Pre-built binairies
for other platforms may come in the future. For Windows users, try this [page](https://github.com/iamdoubz/Plume4Windows).

You will need to have `wget` installed for this method to work.

To download and install the latest release, first define the following variable in your shell:

- `DOWNLOAD_URI`: URI of archived binary file. You may find it at [https://git.joinplu.me/Plume/Plume/releases](https://git.joinplu.me/Plume/Plume/releases). It includes database name `postgres` or `sqlite` in the file name. Choose which you want.

Then run these commands:

```bash
# Create a directory to store executables (this is the standard place for Rust binaries)
mkdir -p ~/.cargo/bin
# Create a directory to store static files and database config
mkdir Plume
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

# Add them to your path, so that you can run them (you may want to edit your ~/.bashrc too)
PATH=$PATH:~/.cargo/bin/
```

To check that everything went well, you can run `plm --help`. It should show an help message.

If everything is working, you can configure your instance.

<a class="action" href="../../config/">Configuration</a>
