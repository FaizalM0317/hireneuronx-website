# HireNeuronX Website

A dark-themed, AI-powered recruiting landing page with a built-in portal for managing the Insights / Blog section.

## Files

- **`index.html`** — The public landing page. Self-contained, uses Tailwind via CDN, no build step.
- **`admin.html`** — The **Insights Portal** (password-protected on Vercel). Add, edit, delete, reorder, and preview blog posts. Exports `insights.json`.
- **`insights.json`** — The source of truth for posts shown on the landing page. Edit via the portal, or by hand.
- **`middleware.js`** — Vercel Edge Middleware that guards `/admin*` with HTTP Basic Auth. Credentials come from env vars, never source.
- **`hire_neuron_x_v_3_futuristic.jsx`** — The same landing page as a React component (drop into Next.js / Vite). Also reads `/insights.json`.
- **`.env.example`** — Template for local env vars. Copy to `.env.local` (git-ignored) if using `vercel dev`.

## Running locally

The landing page reads `insights.json` via `fetch()`, which only works over HTTP (not `file://`). Serve the folder locally:

```powershell
# From the project folder:
python -m http.server 5500
# Then open:
#   http://localhost:5500            -> landing page
#   http://localhost:5500/admin.html -> insights portal
```

(If you just double-click `index.html`, it still works but falls back to the hardcoded default insights. The portal also runs standalone from file:// but only loads posts from browser localStorage.)

## Using the Insights Portal

Open `admin.html` in your browser.

1. **Edit posts** — the left sidebar lists all posts. Click to edit. Use **+ New** to create one, **Duplicate** or **Delete** as needed.
2. **Live preview** — the right panel shows exactly how the card will look on the landing page.
3. **Draft / Published** — toggle the pill at the top of the editor. Only published posts show on the public site.
4. **Auto-save** — your changes are saved in the browser automatically so you can come back later.
5. **Export** — click **Export insights.json** to download the updated file.
6. **Publish** — replace `insights.json` in the repo with the exported file and commit:

```powershell
git add insights.json
git commit -m "Publish new insights"
git push
```

The landing page will pick up the new posts on next load.

### Importing / reloading

- **Import JSON** — upload any `insights.json` to load it into the portal (e.g. if you want to edit the live version).
- **Reload File** — fetch the current `insights.json` from disk (only works over HTTP, i.e. when run via a local server).

## How to add a new blog post

### Option A — Use the portal (recommended)

1. **Start a local server** from the project folder:

   ```powershell
   python -m http.server 5500
   ```

2. **Open** [http://localhost:5500/admin.html](http://localhost:5500/admin.html).
3. Click **+ New** in the left sidebar. A new post appears selected in the editor.
4. Fill in the fields:
   - **Title** — the post headline (shown on the card).
   - **Subtitle** — one-line hook shown under the title.
   - **Author**, **Date** — metadata (date defaults to today).
   - **Tags** — comma-separated, e.g. `speed, quality`.
   - **Summary** — the 1–3 sentences revealed when the card is expanded on the landing page.
   - **Body** *(optional)* — longer article content for a future detail page.
5. Toggle the pill at the top to **Published** when you're ready. Leave it on **Draft** to keep it hidden from the public site.
6. Click **Export insights.json** in the header. A file downloads to your computer.
7. **Replace** the `insights.json` in the project folder with the downloaded file (overwrite).
8. **Commit and push**:

   ```powershell
   git add insights.json
   git commit -m "Add post: <your post title>"
   git push
   ```

9. Refresh the live site — the new post appears in the **Insights** section.

> Tip: If you pushed a change and later want to keep editing, click **Reload File** in the portal to pull the latest `insights.json` from disk, or **Import JSON** and choose the file.

### Option B — Edit `insights.json` by hand

Open `insights.json` and add a new object to the `posts` array:

```json
{
  "id": "my-new-post",
  "title": "My New Post Title",
  "subtitle": "A one-line hook shown under the title.",
  "summary": "1–3 sentences shown when the card is expanded.",
  "body": "",
  "author": "HireNeuronX Team",
  "date": "2026-04-17",
  "tags": ["hiring", "process"],
  "published": true
}
```

Rules:

- `id` must be unique across all posts (use kebab-case, e.g. `building-teams-that-scale`).
- `published: false` hides the post from the public site (use for drafts).
- Order in the `posts` array is the order shown on the landing page (top-to-bottom → left-to-right).

Commit and push the file:

```powershell
git add insights.json
git commit -m "Add post: My New Post Title"
git push
```

### Editing an existing post

Same flow — open the portal (or edit `insights.json` directly), make changes, export/commit, push.

### Deleting a post

In the portal, select the post and click **Delete**. Or remove the object from the `posts` array in `insights.json`. Then export (if using the portal), commit, and push.

### Reordering posts

The landing page shows posts in the order they appear in `posts`. Edit the JSON to change order, or duplicate then delete in the portal to move a post near another. (A drag-reorder UI can be added later if needed.)

## Post schema

Each entry in `insights.json → posts` looks like:

```json
{
  "id": "hire-fast-without-lowering-standards",
  "title": "How To Hire Fast Without Lowering Standards",
  "subtitle": "Frameworks for urgent growth hiring.",
  "summary": "Shown when the card expands on the landing page...",
  "body": "Optional longer article body (plain text or basic HTML).",
  "author": "HireNeuronX Team",
  "date": "2026-04-01",
  "tags": ["speed", "quality", "process"],
  "published": true
}
```

Only `title`, `subtitle`, and `summary` are rendered on the current landing page. `body`, `author`, `date`, `tags` are saved and previewed in the portal — ready for a future article detail page.

## Deploying

Any static host works — nothing to build:

- **Netlify / Vercel / Cloudflare Pages** — drop the folder in.
- **GitHub Pages** — push to a repo and enable Pages.
- **Your own server** — upload the files.

### Securing the portal (Basic Auth on Vercel)

`admin.html` is protected by HTTP Basic Auth via a Vercel Edge Middleware (`middleware.js`). Credentials are read from environment variables and are **never stored in source code**.

**One-time setup on Vercel:**

1. Go to your project on Vercel → **Settings** → **Environment Variables**.
2. Add two variables (apply them to *Production*, *Preview*, and *Development*):

   | Name             | Value                              |
   | ---------------- | ---------------------------------- |
   | `ADMIN_USERNAME` | your chosen username               |
   | `ADMIN_PASSWORD` | a long random password             |

3. Click **Save**, then **Redeploy** the latest deployment (or push any commit). Environment variables only apply to new deployments.
4. Visit `https://<your-domain>/admin.html` — the browser will prompt for the username and password.

Since the site runs over HTTPS (automatic on Vercel), Basic Auth credentials are encrypted in transit.

The public landing page (`index.html`), `insights.json`, and other assets are unaffected — only `/admin*` requires auth.

**Forgot the password?** Update `ADMIN_PASSWORD` in the Vercel dashboard and redeploy.

**Local development** (optional): if you use `vercel dev`, create a `.env.local` file (git-ignored) following `.env.example`. For `python -m http.server`, middleware doesn't run, so admin is unprotected on `localhost` — that's fine since it's not exposed.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co/). The email `Connect@HireNeuronX.com` must be verified once by opening the confirmation email from FormSubmit the first time the form is submitted.
