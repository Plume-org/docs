---
title: Improve the documentation
icon: book-open
summary: 'Write new articles, review the current ones'
time: 30 minutes
---

Having an accurate, understandable and complete documentation is important.

Our documentation is [hosted on GitHub](https://github.com/Plume-org/docs), so you
will need an account here if you want to edit it. You will probably need to fork it
to create a temporary copy you have the right to edit (with the button in the top right corner).

## Documenting something new

If you want to start a new page from scratch, you can do it by going in the `source` folder (and eventually in
another of the sub-folders) and by clicking the "Create new file" button (at the top of the file list).

Enter its name: use a concise version of the title, with hyphens as separators between words, and the `html.md` extension.
Then you can start writing it, using [MarkDown](https://commonmark.org/help/). Documentation should be written in English.

At the top of your file, you can add some meta-data, like that:

```md
---
title: 'The title of the page'
summary: 'A summary of what is explained on this page.'
icon: icon-name
---
```

You can find a list of the icons you can use on [this page](https://feathericons.com/).

## Improving the current documentation

Our current documentation is probably not perfect, and proof-reading it helps a lot! However please note
this part only applies to the English documentation, if you want to improve the documentation in another language,
see how to [translate it](/contribute/translations).

To fix the mistakes you found, you will need to fork the documentation on GitHub (as explained in the first
paragraph of the previous part).

Once it's done, choose the page you want to review, and find the corresponding file on GitHub (the URL of the page in
the documentation and the name of the files are normally the same). Read the page to see if you can find typos, grammar
mistakes, sentences that can be improved, etc. If you see anything that could be improved, go to GitHub and edit the file.


## Saving your work and proposing your changes

Once you finished, you can save your work. To do that, GitHub asks you to make a short summary of your changes.

![The box to write a summary of your changes](/images/new-docs-page.png)

Once you saved your new file, you will have to propose us the changes. To do that you will have to create a new
pull request, that is a space where we can discuss your changes if needed, and then accept them. To do that, use the
"Pull request" button in the file list.

![The button to create a new pull request](/images/docs-pr-button.png)

You can normally leave the default settings (optionally edit the title and the description if you want),
and hit the "Create pull request" button.
