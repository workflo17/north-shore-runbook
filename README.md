# North Shore launch runbook

The thirty-two step runbook for taking [workflo17/north-shore-site](https://github.com/workflo17/north-shore-site)
from a repository to a working practice: the profiles people search, the website,
the CRM, then the wiring that carries a lead to Margie's phone.

It lives in its own project rather than on Margie's site for a reason. It names the
brokerage conflict that is still unsettled, and step 13 is a script for a sales
conversation with her, including how to answer her objections. None of that belongs
on a page a seller might land on.

`src/runbook.html` is the single source. It is written to publish as a Claude artifact,
where the host supplies the document skeleton, so it starts at `<title>` and has no
`<html>` or `<body>` of its own. `build.mjs` adds those and writes `index.html`, which
is what Vercel serves.

```bash
node build.mjs   # after any edit to src/runbook.html
```

Live at <https://north-shore-runbook.vercel.app>, deploying on every push.

**This repository is public, and that is not a slip.** Vercel blocks deployments from
private repositories on this plan: the same push that succeeds here was refused
twenty-five times while the repo was private. The trade is acceptable because the
identical text is already public in
[north-shore-site/DEPLOY.md](https://github.com/workflo17/north-shore-site/blob/master/DEPLOY.md).
If that ever stops being true, this has to move to a paid plan or a file-based deploy
rather than quietly going private again, which would just break the deploy.

The page itself carries `noindex` three ways: the meta tag, `robots.txt`, and an
`X-Robots-Tag` header. So it will not turn up in search, but the URL is unlisted
rather than secret. Share it with anyone you would show the document to, and no one
else.
