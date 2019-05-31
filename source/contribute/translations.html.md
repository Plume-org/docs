---
title: Translators Guide
icon: message-circle
summary: 'Explains how to translate Plume, joinplu.me and this documentation'
time: 10 minutes
---

We use [Crowdin](https://crowdin.com) to translate Plume, the joinplu.me website and the documentation.
All the original text are in English, so you will need to understand it, and to be fluent in another
language to help us with translation.

## Create a Crowdin account

To translate Plume and the related projects, the first step is thus to create a Crowdin account (unless
you already have one).

You can register [here](https://crowdin.com/join). It will just ask you the typical registration information.
You can also sign in with an account from other platforms if you want (GitHub for instance).

## Join one of the Plume projects

All the strings that need to be translated can be found in one of these projects:

- [Plume](https://crowdin.com/project/plume): the Plume interface itself.
- [Plume Documentation](https://crowdin.com/project/plume-docs): the documentation you are currently reading.
- [Joinplu.me](https://crowdin.com/project/joinplume): the website introducing Plume.

One these pages, you will find a list of languages. Select the one you want to translate.

![The list of all currently available languages](/images/language-list.png)

If your language is not in the list, [tell us](/contribute/discussion), we will add it.

Once you selected a language, you will see a list of files to translate. Find one that is not
100% complete, and open it. Something like that should load:

![The Crowdin editor](/images/crowdin-editor.png)

Let's see what we have here.

![The Crowdin editor, but with colors for the different areas](/images/crowdin-editor-area.png)

- In yellow (left sidebar), you have the list of strings to translate. Those with a green square
are already translated, those with a red one are still to be done.
- In blue (middle-top area), you have the actual editor, with on the top the original string, and under
it, the box where you write translations. Sometimes, some context will be given next to the original string.
And there is a button to save your translations too (you can do `Ctrl`/`⌘`+`Enter` to save without leaving your keyboard too).
- In red (middle-bottom area), you have previous suggestions made by other people, and translations suggested by
various translation services. They can sometimes be helpful, but most of the time, nothing is better than human translations.
- And finally, in purple (right sidebar), you have an area where you can leave comments or ask questions. For instance, if
you need more context about a string, you can ask here. We will try to answer you as fast as possible, but we are not working
full-time on Plume, so don't worry if you don't get a reply in 5 minutes.

## In-context translations

Crowdin also provides a quite useful tool, called "in-context translations".
It allows you to translate website, while browsing them, and thus having all the context to understand what needs to be done.

We installed this tool for the documentation and joinplu.me (we may install it for Plume too one day, but it is a bit more
complicated). You can go on [translate.docs.joinplu.me](https://translate.docs.joinplu.me/) and [translate.joinplu.me](https://translate.joinplu.me/)
to use it.

![An example of in-context translation](/images/crowdin-in-context.png)

## Recommendations

When translating Plume (and related projects), please try to follow these rules:

- Be as inclusive as possible: if your langage has a form of inclusive writing, use it.
The style of inclusive that is choosen is not very important (just try to keep coherent with what is already done).
- Don't be too formal (but stay polite!).

---

That's it, you know everything you need to translate Plume! Thank you for your help!
