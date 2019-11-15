---
title: Updating from source
---

To update your instance, run these commands with `plume` user if you created it, or with your default user, in the Plume directory.
Replace `DATABASE` with either postgres or sqlite depending on what you are using, and `PLUME_VERSION` with the latest version tag (`0.4.0-alpha-4` currently).

```bash
# Get the latest version of the code
git pull origin master
git checkout PLUME_VERSION # Skip this step if you want to use master, and not a tagged release

# Build the front-end
cargo web deploy -p plume-front

# Update plm
cargo install --path plume-cli --force --features DATABASE
# Update plume
cargo install --path . --force --no-default-features --features DATABASE

# Run the migrations
plm migration run

# Restart your instance
# If you are using sysvinit
sudo service plume restart
# If you are using systemd
sudo systemctl restart plume
```

That's it!
