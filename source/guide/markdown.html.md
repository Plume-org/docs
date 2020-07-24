---
title: Markdown reference
icon: type
summary: 'Markdown is the syntax Plume uses to format your articles and comments'
---

Plume supports the [CommonMark](https://commonmark.org/) version of Markdown.

On top of that, we added a few custom extensions:

- **tables**, as documented [here](https://www.markdownguide.org/extended-syntax#tables)
- **footnotes**, as documented [here](https://www.markdownguide.org/extended-syntax#footnotes)
- **striketrough**, as documented [here](https://www.markdownguide.org/extended-syntax#strikethrough)
- **task lists**, as documented [here](https://www.markdownguide.org/extended-syntax#task-lists)
- **code highlighting**. For a detailed documentation, see below.
- **hashtags** as in `#Example`. This will add a link in your post pointing to the page of this tag, with all the articles that have this tag, either in their body or at the bottom of the article. Someone searching for this hashtag on another federated application (like Mastodon or Pleroma) should see your post in the results.
- **mentions** as in `@example@instance.org`. This will send a notification to the mentionned user, and create a link to their profile.
- **custom image syntax**. On top of the standard `![description](url)` syntax, we added our own: `![description](ID)` where ID is the ID of a media in your gallery. This allows us to show a content warning if you defined one in your gallery. This syntax is the one shown when you upload a picture in your gallery, so you just have to copy that code.

## Syntax highlighting

You can add color to your code with the following syntax:

```
`​`​`language
your code goes here
`​`​`
```

Language is the name of the language you are using.
The supported languages are those in [this repository](https://github.com/sublimehq/Packages/tree/fa6b8629c95041bf262d4c1dab95c456a0530122) since we use SublimeText's syntax file.
Usually the name is in lower-case: for instance `Python` can be highlighted with `python`.

To configure the theme to use, you will have to [choose a different theme for your bblog](/guide/manage-a-blog).
