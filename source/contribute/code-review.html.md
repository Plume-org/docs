---
title: Review the proposed changes
icon: git-pull-request
summary: 'Review one of the proposed pull requests.'
time: 30 minutes
---

Some people contribute to Plume by improving it's source code. They propose changes to the
software throught what is called "pull requests" on Gitea or GitHub (thus you will need to create a Gitea
or GitHub account to follow this guide, if you don't have one yet).

Here is the [list of all pull requests needing to be reviewed]()([GitHub](https://github.com/Plume-org/Plume/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+review%3Arequired+label%3A%22S%3A+Ready+for+review%22)).
Choose one that seems interesting to you, read the discussion for context about what needs to be reviewed,
and what was already tested, and start your review.

## Test the changes

Each pull request is deployed in live so that you can easily test the changes they bring.
The URL to access the test instance is `https://pr-XXX.joinplu.me/`, where `XXX` is the number
of the pull request (that is shown next to the title on GitHub).

A list of all running test instances is also available on [pr-list.joinplu.me](https://joinplu.me). Only
five instances may run at the same time, to avoid to overload our server. If the instance you wanted to access
is not available, wait for the CI to run again (it will restart it), choose another pull request, or test it locally
if you know how to do it.

A good start is to go to the test instance for your pull request, and to see if everything works as expected,
but also to try to find some corner cases that were not expected, and that may break something.

Don't hesitate to try the feature on different devices too, and from different browser, especially if it changes
the user interface.

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
