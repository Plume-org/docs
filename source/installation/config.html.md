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
Here is a sample of what you should put inside.

```bash
# The address of the database
# (replace USER, PASSWORD, PORT and DATABASE_NAME with your values)
#
# If you are using SQlite, use the path of the database file (`plume.db` for instance)
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

For more information about what you can put in your `.env`,
see [the documentation about environment variables](/environment).

Now we need to run migrations. Migrations are scripts used to update
the database. To run the migrations, you can do:

```bash
plm migration run
```

Migrations should be run after each update. When in doubt, run them.

After that, you'll need to setup your instance, and the admin's account.

```
plm instance new
plm users new --admin
```

You will also need to initialise search index

```
plm search init
```

For more information about these commands, and the arguments you can give them,
check out [their documentation](/CLI).

Now that Plume is configured, if you are in a production environment you probably
want to configure your init system to make it easier to manage.

<a class="action" href="/installation/init">Configure init system</a>
