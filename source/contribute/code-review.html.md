---
title: Review the proposed changes
icon: git-pull-request
summary: 'Review one of the proposed pull requests.'
time: 30 minutes
---

Some people contribute to Plume by improving it's source code. They propose changes to the
software throught what is called "pull requests" on Gitea or GitHub (thus you will need to create a Gitea
or GitHub account to follow this guide, if you don't have one yet).

Here is the [list of all pull requests needing to be reviewed](https://git.joinplu.me/Plume/Plume/pulls?q=&labels=57)([GitHub](https://github.com/Plume-org/Plume/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+review%3Arequired+label%3A%22S%3A+Ready+for+review%22)).
Choose one that seems interesting to you, read the discussion for context about what needs to be reviewed,
and what was already tested, and start your review.

## Test the changes

To test the changes, you need build development environment following the [development guide](../development/).

After that, check out the source code of the pull reuquest you will test. You can see from which repository and branch you should checkout at the pull request page, For instance, [issue #813](https://git.joinplu.me/Plume/Plume/pulls/813) was sent from `igalic/Plume:refactor/extract-actors`. You can know that by seeing the line blow title of the pull request, which says "igalic wants to merge 18 commits from igalic/Plume:refactor/extract-actors into main".
![](https://i.gyazo.com/00c352f66ad85f550a34784e8706dc71.png)

Check out the branch, build code, run migration if needed and you can now test the changes by visiting `http://localhost:7878`.

Leep comments at the pull request page after you tested.

## Review the code

If you know one of the programming languages used in Plume (Rust, SCSS, HTML and SQL mostly), you can also review the quality
of the code: give advices about it's efficiency, ask for clarification if you are not sure what it does, point out potential
bugs, etc.

You can do that by going to the "Files changed" tab on the page of pull request on Gitea or GitHub. Then you will be able to comment on the
diff, as seen in this GIF:

![Commenting on the diff](/images/code-review.gif)

## Writing your review

Once you tested the changes, you need to tell to the person who proposed the pull request what you found.

The best way to do that is to go to the "Files changed" tabs on the Gitea or GitHub pull request, and to click the green "Review
changes" button, in the top right corner. Then write a comment in the box that appears, explaining what worked, and what went
wrong. Don't hesitate to give precise information, explaining how to reproduce issues for instance. When making comments
about someone else's work, be kind, and try to make constructive critics.

Then click one of "Request changes", "Comment" or "Approve" to send your comments.

It is possible that the person who opened the pull request asks for more details: the review doesn't really
stop until the pull request is fully accepted (but you have the right to tell them you don't want to help with
review anymore, someone else will probably take care of it).
