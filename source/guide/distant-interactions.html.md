---
title: Distant interactions
icon: globe
summary: 'How to interact with people, blogs and articles that are on a different instance'
---

# Interacting with people from other instances

Due to its federated nature, other people using Plume are not necessary on the same instance as you.

However, you can still interact with them (follow them, like their articles, comment on them…). If you
try to interact with someone or something while not being on your instance, you will be prompted to either
log in on the current instance, or to enter your full user name (in the `name@instance` format) to be redirected
to your own instance (where you are logged in).

# Entering the URL manually

You can also make your own instance discover other blogs or accounts by entering their URL manually.

The URL to enter for distant profiles is `https://your.instance/@/name@other.instance`. For blogs it is
`https://your.instance/~/name@other.instance` (the only difference is that one uses `@`, while the other
uses `~`).

When opening a remote profile like that, Plume will fetch articles this person already published. However,
it can take some time, so try to refresh the page a few times if no articles appears on the first try. Also
note that old articles are not yet fetched when viewing a remote blog for the first time (this issue will probably
be fixed sooner or later).

# Start to federate

As soon as you will have interacted with someone on another instance, this instance will be aware you exist, and
thus will broadcast you the new activities: you will for instance see the new articles from this instance in your
federated feed.