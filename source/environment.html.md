---
title: Useful Environment Variables
icon: file-text
summary: 'Plume uses environment variable to configure instances. You can use them
to configure the database, or the HTTP interface for instance.'
---

Plume relies on some environment variables for some configuration options. You can either set them before
starting the app with `cargo run` or write them in a `.env` file to have automatically loaded.

Here are the variables that Plume uses:

- `BASE_URL`: the domain name, or IP and port on which Plume is listening. It is used in all federation-related code.
- `DATABASE_URL`: the URL of the PostgreSQL database, used by Plume (`postgres://plume:plume@localhost/plume` by default with PostgreSQL, `plume.db` with SQlite).
- `MIGRATION_DIRECTORY`: The folder that stores the migration files for the database, migrations/postgres for PostgreSQL database or migrations/sqlite for SQlite database.
- `ROCKET_ADDRESS`: the adress on which Plume should listen (`0.0.0.0` by default).
- `ROCKET_PORT`: the port on which Plume should listen ([`7878` by default](https://twitter.com/ag_dubs/status/852559264510070784))
- `ROCKET_SECRET_KEY`: key used to sign private cookies and for CSRF protection. If it is not set, it will be regenerated everytime you restart Plume,
meaning that all your users will get disconnected. You can generate one with `openssl rand -base64 32`.

The SMTP server to send mails can be configured with:

- `MAIL_SERVER`: the SMTP server to connect to.
- `MAIL_USER`: the username of the user that sends emails.
- `MAIL_PASSWORD`: its password.
- `MAIL_HELO_NAME`: the name sent during EHLO/HELO.

You can also change the logo you want to use for your instance in this file. Your logo should be in the `static` directory.
To make Plume load it, you can use:

- `PLUME_LOGO`: it will change the logo in the header, the favicon, and the webmanifest (used when pinning a website
to home screen on mobile phones). It is recommended to use SVG files when possible.
- `PLUME_LOGO_FAVICON`: that can change the favicon, if you want to use an image that is not `PLUME_LOGO`.
- `PLUME_LOGO_size`: where `size` is one of 48, 72, 96, 144, 160, 192, 256 or 512. It will change the icon to use
in the webmanifest for the given size. You can of course specify it multiple times, with different sizes.

All the specified paths should be relative to the `static` directory.

Here is an example, that will make your instance use the "paragraphs" logo.

```bash
PLUME_LOGO=icons/trwnh/paragraphs/plumeParagraphs.svg
PLUME_LOGO_FAVICON=icons/trwnh/paragraphs/plumeParagraphs32.png
PLUME_LOGO_48=icons/trwnh/paragraphs/plumeParagraphs48.png
PLUME_LOGO_72=icons/trwnh/paragraphs/plumeParagraphs72.png
PLUME_LOGO_96=icons/trwnh/paragraphs/plumeParagraphs96.png
PLUME_LOGO_144=icons/trwnh/paragraphs/plumeParagraphs144.png
PLUME_LOGO_160=icons/trwnh/paragraphs/plumeParagraphs160.png
PLUME_LOGO_192=icons/trwnh/paragraphs/plumeParagraphs192.png
PLUME_LOGO_256=icons/trwnh/paragraphs/plumeParagraphs256.png
PLUME_LOGO_512=icons/trwnh/paragraphs/plumeParagraphs512.png
```

## Diesel

Diesel, the tool we use to run migrations may be configured with the `DATABASE_URL` which should contain the URL of the
PostgreSQL database, or the path to the SQLite file. Otherwise, you can specify `--database-url YOUR-URL` everytime you run a `diesel` command.
