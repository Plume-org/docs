# docs

The documentation for Plume, available at [docs.joinplu.me](https://docs.joinplu.me).

Uses [middleman][].

## Prerequisites

* Ruby
* [Crowdin CLI][] v3 if you build translations
* Netlify CLI if you deploy

## Setting up

Install RubyGems including [middleman][]:

```shell
bundle config set --local path vendor/bundle
bundle install
```

## Editing documentation

Run

```shell
bundle exec middleman
```

, visit http://localhost:4567/, and then you can see documentation site.

Edit files under `source` directory and reload your browser, then you see updated content. But this site doesn't include translations. If you want to include translated pages, see next section.

After editing, create a pull request.

## Building site with translation integration

If you want to build site with translations, you need set up [Crowdin CLI][].

Run

```shell
bundle exec rake build_site
```

and then the site with translations is built under `build` directory. You can see the site using one-liner server such as

```shell
ruby -run -e httpd build
```

or web server such as Caddy.

## Updating translation strings

When you add and/or modify strings from current sources, you may want to translate them. To do so, updated contents need to be uploaded to Crowdin. Run

```shell
bundle exec rake crowdin:upload
```

then you can translate strings at Crowdin.

## Building translation site

When you build site for https://translate.docs.joinplu.me/, run

```shell
bundle exec rake build_trans
```

then the site is built under `translate` directory.

## Deploying site

You need [Netlify CLI][] if you deploy site.

Run

```shel
bundle exec rake deploy
```

then you can see updated site at https://docs.joinplu.me/.

## Deploying translation site

Run

```shell
bundle exec rake deploy_trans
```

and then you can see updated translation site at https://translate.docs.joinplu.me/.

[middleman]: https://middlemanapp.com/
[Crowdin CLI]: https://support.crowdin.com/cli-tool/
[Netlify CLI]: https://cli.netlify.com/
