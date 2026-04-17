# HireNeuronX Website

A dark-themed, AI-powered recruiting landing page.

## Files

- **`index.html`** — A fully working, self-contained website. Open it directly in a browser. Uses Tailwind via CDN — no build step needed.
- **`hire_neuron_x_v_3_futuristic.jsx`** — The same site as a clean React component (for when you're ready to put it into a React/Next.js project).

## How to view the site

Just double-click `index.html`, or right-click → **Open with** → your browser.

For best results run a tiny local server (optional, but fixes some edge cases):

```powershell
# From the Faizal_Website folder:
python -m http.server 5500
# Then open http://localhost:5500 in your browser
```

## What was fixed

1. **Buttons now work** — anchor links (`#home`, `#solutions`, `#contact`, etc.) scroll correctly with an offset so the sticky header doesn't cover the section heading.
2. **Expandable cards now show their content** — previously the `more` detail field was destructured from 2-item arrays and was always `undefined`.
3. **Mobile navigation** — added a working hamburger menu.
4. **React warnings cleaned up** — all `.map()` calls now have stable `key` props.
5. **Accessibility** — added `aria-label`, `aria-expanded`, proper `rel="noopener noreferrer"` on external links, input labels, and focus rings.
6. **Design polish** — gradient title, animated status dots, scroll-reveal animations, grid backgrounds, active-section nav highlighting, shiny primary button, smoother hover states.
7. **SEO & metadata** — `<title>`, `<meta description>`, Open Graph tags moved into the HTML `<head>` where they actually work.

## Using the form

The contact form posts to [FormSubmit](https://formsubmit.co/) — the email `Connect@HireNeuronX.com` must be verified once by opening the confirmation email from FormSubmit the very first time the form is submitted.

## Deploying

Any static host works:
- **Netlify** / **Vercel** / **Cloudflare Pages**: drop the folder in.
- **GitHub Pages**: push to a repo and enable Pages.
- **Your own server**: upload `index.html`.

## Using the React version

Drop `hire_neuron_x_v_3_futuristic.jsx` into a Next.js/Vite + Tailwind project. It exports a default component named `HireNeuronXV3`.
