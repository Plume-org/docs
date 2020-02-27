---
title: Creating a theme
icon: file-plus
summary: Tips for people who want to create a theme for an instance
---

Plume themes are CSS files (and optionally other resources that can be loaded with CSS, like fonts or background images),
so all you need to know to write a theme is to know CSS.

# Base template

A good start can be the official base theme, that is written in SCSS, and that you can find
[in Plume's repository](https://github.com/Plume-org/Plume/tree/master/assets/themes/default).
You can copy these files (they are under the AGPL-3.0 license), and start by changing the variables
in `_variables.scss`. If you use this theme as a basis, the [SASS/SCSS](https://sass-lang.com/) will be
needed to transform it to a single CSS file that an admin can install on their instance.

To test your theme, you can install a browser extension like [*Stylish*](https://userstyles.org) and copy your CSS inside.

Plume updates may sometimes break your theme (if we make a layout change, add a new CSS class, or so on).
If you want to ensure your theme continues to work as Plume is developed, following [the project on GitHub](https://github.com/Plume-org/Plume/) can notify you when we make changes that might affect your theme.
Pull requests and commits breaking themes are normally clearly identified as such.

# Detailed explanations

There are two kind of themes in Plume:

- instance themes, that an admin can define as the default theme for an instance, and that users registered on this instance can choose as their personnal default if they want.
- and blog themes, that blog authors can use to customize their blogs. They are only applied to the pages of this blog, and override instance-level themes.

The only difference when you build a theme is that blog themes should be in the `static/css/blog-NAME` directory, whereas instance themes should be in `static/css/NAME` (with `NAME` the actual name of your theme).

Inside of this directory, the only required file is `theme.css`.
This file is the only one that Plume loads, so it is in charge of loading everything else (fonts that you use for instance).

And that's it, you are free to do anything you want with themes, as long as you respect these rules.

# Detecting dark themes

When writing theme for blogs, it can be usefull to know if the global instance theme is dark or not, to adapt the blog's theme accordingly.
Thus, as a convention, dark themes should always have the word "dark" in their name.
Plume then adds the current theme name to the CSS classes of the HTML document, allowing you to detect which kind of theme the user has.

Here is an example that shows quotes in blue for light themes, and in orange for dark themes:

```css
article blockquote {
	color: blue;
}

html[class*=dark] article blockquote {
	color: orange;
}
```

# Plume can compile your themes

If you build Plume from source, any theme in `assets/themes/NAME` will be compiled in `static/css/NAME`.
SCSS or SASS file will be transformed into CSS, unless their name start with an underscore.
Each SCSS/SASS file is treated as a different theme even if they are in the same directory, allowing them to share files (usefull when you want to do color variants of your theme for example).

Other files will just be copied to the output directory.
