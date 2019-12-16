---
title: plm CLI reference
icon: terminal
summary: 'plm is a little CLI tool that can help you to manage your instance from the
command line if you are admin of an instance.'
---

You can see these help messages with `plm --help` or `plm COMMAND --help` (where `COMMAND` is the specific subcommand you are interested in).

If any required argument is ommitted, you will be asked to input manually.

## `plm instance`

Manage instances.

### `plm instance new`

Create a new local instance.

**Example:**

```bash
plm instance new --private --domain plu.me --name 'My Plume Instance' -l 'CC-BY'
```

**Arguments:**

- `--domain`, `-d`: the domain name on which your instance will be available.
- `--name`, `-n`: The name of your instance. It will be displayed on the homepage.
- `--default-license`, `-l`: the license to use for articles written on this instance, if no other license is explicitely specified. Optional, defaults to CC-BY-SA.
- `--private`, `-p`: if this argument is present, registering on this instance won't be possible. Optional, off by default.

**Environment variables:**

- `BASE_URL` will be used as a fallback if `--domain` is not specified.

## `plm users`

Manage users.

### `plm users new`

Creates a new user on this instance.

**Example:**

```bash
plm users new --admin -n 'kate' -N 'Kate' --bio "I'm Kate." --email 'kate@plu.me'
```

**Arguments:**

- `--name`, `--username`, `-n`: the name of this user. It will be used an human-readable identifier in URLs, for federation and when mentioning this person. It can't be changed afterwards.
- `--display-name`, `-N`: the display name of this user, that will be shown everywhere on the interface.
- `--bio`, `--biography`, `-b`: the biography of the user. Optional, empty by default.
- `--email`, `-e`: the email adress of the user.
- `--password`, `-p`: the password of the user. You probably want to use this option in shell scipts only, since if you don't specify it, the prompt won't show your password.
- `--admin`, `-a`: makes the user an admin of the instance. Optional, off by default.

### `plm users reset-password`

Resets user password.

**Example:**

```bash
plm users reset-password -u 'alice' -p 'top_secret'
```

**Arguments:**

- `--user`, `-p`: the username of the person which will have their password reset (no `@` before, not the display name).
- `--password`, `-p`: the new password of the user. You probably want to use this option in shell scipts only, since if you don't specify it, the prompt won't show your password.

## `plm search`

Manage search index.

### `plm search init`

Initialize Plume's internal search engine.

**Example:**

```bash
plm search init -p Plume
```

**Arguments:**

- `--path`, `-p`: path to Plume's working directory.

### `plm search refill`

Regenerates the search index.

**Example:**

```bash
plm search refill -p Plume
```

**Arguments:**

- `--path`, `-p`: path to Plume's working directory.

### `plm search unlock`

Remove lock on the search index, after abnormal termination such as power loss.
Only do this if you know no processus is currently using the index.

**Example:**

```bash
plm search unlock -p Plume
```

**Arguments:**

- `--path`, `-n`: path to Plume's working directory.

## `plm migration`

Manage migrations.

### `plm migration run`

Run migrations.

**Example:**

```bash
plm migration run -p Plume
```

**Arguments:**

- `--path`, `-p`: path to Plume's working directory.

### `plm migration redo`

Rerun latest migration.

**Example:**

```bash
plm migration redo -p Plume
```

**Arguments:**

- `--path`, `-p`: path to Plume's working directory.
