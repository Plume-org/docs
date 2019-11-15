---
title: Instance administration
icon: settings
summary: A guide for instance administrators
---

# Managing themes

There are two kind of themes in Plume:

- instance themes, that an admin can define as the default theme for an instance, and that users registered on this instance can choose as their personnal default if they want.
- and blog themes, that blog authors can use to customize their blogs. They are only applied to the pages of this blog, and override instance-level themes.

As an admin, you are in charge of choosing which themes (both instance-level and blog-level ones) will be available on your instance.
To make a theme available, all you have to do is to put its files in `static/css/NAME` (with `NAME` the actual name of the theme).

If you build Plume from source, any theme in `assets/themes/NAME` will be compiled in `static/css/NAME`.
You can thus download the source of a theme written in SCSS or in SASS and build it along with Plume (just with `cargo run`, `cargo build` or `cargo install`, as usual).

You can also choose the default instance theme with the `DEFAULT_THEME` environment variable.
