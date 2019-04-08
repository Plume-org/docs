---
title: Release process
icon: truck
summary: 'What we do between each releases'
---

# Versionning

Plume follows semantic versionning. The 0.x series is for alpha versions. The `x` doesn't actually correspond
to the alpha number, because `0.1.0` was before the first release, and `0.2.0` was the first alpha.

Beta versions or pre-release uses the `-rcX` suffix, where `X` is the number of the release canditate.

Major version changes when API or federation has a breaking change (they should in the same release as much as possible), not when
major changes are made to the interface for example (even if the two are often linked).

# What gets in each version

We don't set deadlines for new releases. We just assign issues (either bug to be fixed or feature requests) on GitHub to a given
milestone as we feel it, and once it is complete, we make a new release.

**[→ Milestones list on GitHub](https://github.com/Plume-org/Plume/milestones?direction=asc&sort=due_date)**

We should prefer making small releases often, than big ones once a year or so.

# The release itself

When we decide to make a new release, we give two weeks to translators to update translations. During this
period bug fixes and new features are accepted, as long as they don't change the messages used in the interface.

At the beginning of the string freeze, the new version of the `.pot` files are uploaded to Crowdin, with all the new
messages that were added during the cycle.

At the end of these two weeks, the updated `.po` get pulled in the main code repository.

We should make sure the documentation is up-to-date before publishing a release.

For each release, we make an announcement as a blog post (on Plume of course), a message on the Matrix room,
and a more technical/impersonal changelog on the GitHub release page (basically a list of the PR that were merged
since the last release). This last technical changelog should include any steps that should be taken for this specific
update that are not listed in the general update documentation.

<!-- TODO: do we need to ping translators when entering string freeze? -->