---
title: Creating a theme
icon: file-plus
summary: Tips for people who want to create a theme for an instance
---

Plume themes are just CSS files, so all you need to know to write a theme is to know CSS.

A good start can be the official base theme, that is written in SCSS, and that you can find
[in Plume's repository](https://github.com/Plume-org/Plume/tree/master/static/css).
You can copy these files (they are under the AGPL-3.0 license), and start by changing the variables
in `_variables.scss`. If you use this theme as a basis, the [SASS/SCSS](https://sass-lang.com/) will be
needed to transform it to a single CSS file that an admin can upload.

To test your theme, you can install a browser extension like *Stylish* and copy your CSS inside.

If you have the will to maintain your theme, following Plume development (by watching [the project on GitHub](https://github.com/Plume-org/Plume/))
can be a good idea: you will be able to see when we change something that may break your theme (layout change, a new CSS class, etc).
