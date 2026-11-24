# Steady Leads

Website for Steady Leads, marketing for the trades. Pages are plain HTML sharing `site.css` and `site.js`. Contact details and social links are set at the top of `site.js`. Spanish text lives in the `ES` list in `site.js`.

Pages: `index.html` (landing video), `home.html`, `what-we-do.html`, `how-it-works.html`, `pricing.html`, `our-principles.html`, `who-we-are.html`.

## Custom domain (when bought)

1. Add a file named `CNAME` at the root containing only the domain, e.g. `steadyleads.com`.
2. At the domain registrar, point the apex domain to GitHub Pages with four A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and a CNAME record for `www` pointing to `william-arana.github.io`.
3. In the repo's Settings → Pages, enter the domain and turn on Enforce HTTPS once the certificate is issued.
