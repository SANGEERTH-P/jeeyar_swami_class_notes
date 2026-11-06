# Class notes

A small two-page site: a home page and a class notes page with tabs.

## Putting it on GitHub Pages

1. Create a new repository on GitHub (for example `class-notes`).
2. Upload all the files, keeping the `css` and `js` folders as they are.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/class-notes/`.

## Adding notes

All notes live in `notes.html`. Each subject is a `<section class="panel">`.
Inside it, copy the `<article class="entry">` block for every new class.

To quote a sloka or pasuram, use:

    <div class="verse" lang="ta">first line
    second line</div>

## Adding a science discussion

1. In the science tab list, copy a `<li>` line and change `data-panel` (e.g. `science-3`) and the label.
2. At the bottom of `notes.html`, copy a science `<section>` and set its `id` to the same name.
