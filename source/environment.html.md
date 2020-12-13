---
title: Useful Environment Variables
icon: file-text
summary: 'Plume uses environment variable to configure instances. You can use them
to configure the database, or the HTTP interface for instance.'
---

Plume relies on some environment variables for some configuration options. You can either set them before
starting the app with `cargo run` or write them in a `.env` file to have automatically loaded.

## Basic

Here are the variables that Plume uses:

- `BASE_URL`: the domain name, or IP and port on which Plume is listening. It is used in all federation-related code.
- `DATABASE_URL`: the URL of the database used by Plume (`postgres://plume:plume@localhost/plume` by default with PostgreSQL, `plume.db` with SQlite).
- `MIGRATION_DIRECTORY`: The folder that stores the migration files for the database, `migrations/postgres` for PostgreSQL databases or `migrations/sqlite` for SQlite databases.
- `ROCKET_ADDRESS`: the address on which Plume should listen (`0.0.0.0` by default).
- `ROCKET_PORT`: the port on which Plume should listen ([`7878` by default](https://twitter.com/ag_dubs/status/852559264510070784)).
- `ROCKET_SECRET_KEY`: key used to sign private cookies and for CSRF protection. If it is not set, it will be regenerated everytime you restart Plume,
meaning that all your users will get disconnected. You can generate one with `openssl rand -base64 32`.
- `SEARCH_INDEX`: the directory where the search index will be saved (`search_index` by default).
- `SEARCH_TAG_TOKENIZER`: the tokenizer used for tags when searching. `simple`, `ngram`, `whitespace` and `lindera` are available. `simple` tokenizer tokenizes the text by splitting on whitespaces and punctuation. `ngram` tokenizes by splitting words into bigram at a minimum and 8-gram at a maximum. `whitespace` tokenizes by splitting on whitespaces but not on punctuation. `lindera` tokenizes the text by splitting into Japanese morpheme, which is available only when build with `search-lindera` feature. `whitespace` by default. Since v0.5.0.
- `SEARCH_CONTENT_TOKENIZER`: the tokenizer used for blog contents when searching. The same tokenizers to `SEARCH_TAG_TOKENIZER` are available. `simple` by default. Since v0.5.0.
- `SEARCH_LANG`: the shortcut for the combination of `SEARCH_TAG_TOKENIZER` and `SEARCH_CONTENT_TOKENIZER`. Currently supports only `ja` and it requires `search-lindera` feature on build. This is experimental and might change in the future. Since v0.5.0.
- `MEDIA_UPLOAD_DIRECTORY`: the directory in which to store the uploaded medias (`./static/media` by default). Plume won't create this directory if it doesn't exist, so make sure to create it before.
- `DEFAULT_THEME`: the name of the default theme. It should be the same as the name of the directory containing the theme in `static/css`.
- `DB_MAX_SIZE`: the maximum number of database connections (`10` by default). Since v0.5.0.
- `DB_MIN_IDLE`: the minimum idle database connection count (the same to `DB_MAX_SIZE` by default). Since v0.5.0.

## Mail

The SMTP server to send mails can be configured with:

- `MAIL_SERVER`: the SMTP server to connect to.
- `MAIL_USER`: the username for authentication purposes.
- `MAIL_PASSWORD`: its password.
- `MAIL_HELO_NAME`: the name sent during EHLO/HELO.
- `MAIL_ADDRESS`: the address that emails will be sent from.

For the moment, Plume only sends mail when you need to reset your password (and only from the web interface, `plm users reset-password` doesn't send anything).
If you don't plan to use this feature, you can simply remove (or comment) the lines to configure the mail server in your `.env`.

## Logo

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

## LDAP

Plume support delegating authentication via LDAP since v0.6.0.

- `LDAP_ADDR`: address of the LDAP server
- `LDAP_BASE_DN`: base DN used when binding, see explanation below
- `LDAP_USER_NAME_ATTR`: attribut with user name used when binding, see explanation below (default=`cn`)
- `LDAP_USER_MAIL_ATTR`: attribut containing the mail address of the user (default=`mail`)
- `LDAP_TLS`: connect to the LDAP server using TLS (default=false)

Plume determines what to bind using `LDAP_BASE_DN`, `LDAP_USER_NAME_ATTR` and the user name.
Assuming what you need Plume to bind is `username={user name},ou=users,dc=your-org`, the configuration would be the following:

```bash
LDAP_BASE_DN=ou=users,dc=your-org
LDAP_USER_NAME_ATTR=username
```
