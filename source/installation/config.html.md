---
title: Configuring Plume
---

If you are using PostgreSQL, you have to create a database for Plume.

```
service postgresql start
su - postgres
createuser -d -P plume
createdb -O plume plume
```

Before starting Plume, you'll need to create a configuration file, called `.env`.
This file should be in the same directory as the one in which you will start Plume (`~/Plume`, if you followed the previous instructions).
If you are installing from source, you can use `cp .env.sample .env` to generate it.
Here is a sample of what you should put inside for **GNU/Linux** and **Mac OS X** systems.

```bash
# The address of the database
# (replace USER, PASSWORD, PORT and DATABASE_NAME with your values)
#
# If you are using SQlite, use the full path of the database file (`plume.db` for instance)
#DATABASE_URL=\etc\path\to\Plume\plume.db
DATABASE_URL=postgres://USER:PASSWORD@IP:PORT/DATABASE_NAME

# For PostgreSQL: migrations/postgres
# For SQlite: migrations/sqlite
MIGRATION_DIRECTORY=migrations/postgres

# The domain on which your instance will be available
BASE_URL=plu.me

# Secret key used for private cookies and CSRF protection
# You can generate one with `openssl rand -base64 32`
ROCKET_SECRET_KEY=

# Mail settings
# If you don't want to setup a mail server and/or address for plume
# and don't plan to use the "password reset" feature,
# you can comment these lines.
MAIL_SERVER=smtp.example.org
MAIL_USER=example
MAIL_PASSWORD=123456
MAIL_HELO_NAME=example.org
MAIL_ADDRESS=from@example.org
```

For **Windows** systems, everything is the same, unless you are using SQLite for your database, then you will need to change your paths
from backslashes (\) to forward slashes (/) else you will receive error.

```
DATABASE_URL=C:/path/to/Plume/plume.db
```

For more information about what you can put in your `.env`,
see [the documentation about environment variables](/environment).

Now we need to run migrations. Migrations are scripts used to update
the database. To run the migrations, you can do for **GNU/Linux** and **Mac OS X**:

```bash
plm migration run
```

If you are using **Windows** and DATABASE of sqlite, you will need to copy the sqlite3.dll from 
"C:\ProgramData\chocolatey\lib\SQLite\tools" to where plm.exe and plume.exe were compiled:
```
copy "C:\ProgramData\chocolatey\lib\SQLite\tools\sqlite3.dll" "C:\Users\%USERNAME%\.cargo\bin\sqlite3.dll"
```

Now you may run the migrations:
```
plm migration run
```

Migrations should be run after each update. When in doubt, run them.

You will also need to initialise search index:

```
plm search init
```

After that, you'll need to setup your instance, and the admin's account.

```
plm instance new
plm users new --admin
```

On **Windows**, there might be an error creating the admin user. To get around this, you need to run:
```
plm users new --admin -n "adminusername" -N "Human Readable Admin Name" -b "Biography of Admin here" -p hackmeplease
```

For more information about these commands, and the arguments you can give them,
check out [their documentation](/CLI).

Now that Plume is configured, if you are in a production environment you probably
want to configure your init system to make it easier to manage.

<a class="action" href="/installation/init">Configure init system</a>
