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

The deployment carries `noindex` three ways: the meta tag, `robots.txt`, and an
`X-Robots-Tag` header. The URL is unlisted rather than private, so treat it as
shareable with anyone you would show the document to, and no one else.
