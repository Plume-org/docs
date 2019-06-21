---
title: Manage a blog
icon: book-open
summary: 'How to customize your blog'
---

You can open your blog settings, by clicking on the "Edit" purple button in the top right part of its main page.

# Adding a custom theme

In your blog settings, you have a text box where you can enter any CSS.
This CSS will be applied to your blog's main page, and to the articles published in this blog.
You can do absolutely everything, expect using `url()` or `@import` to load external resources.

You can also detect if the person visiting your blog chose a dark theme or not with the `html[class*=dark]` selector.
For instance, if you want to make quotes in your article blue with light themes, but orange with dark ones, you could do:

```css
article blockquote {
	color: blue;
}

html[class*=dark] article blockquote {
	color: orange;
}
```

If you copy a theme you found on Internet, please review it if you can to make sure it doesn't break anything you or your reader may need to use.
