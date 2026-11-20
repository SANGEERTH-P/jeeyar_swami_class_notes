# Ponnadiyaam Sengamalam

Live site: https://sangeerth-p.github.io/jeeyar_swami_class_notes/

## Files

- `index.html` - home page
- `about.html` - Jeeyar Swami details (from the biography PDF in `docs/`)
- `classes.html` - the tiles for each subject
- `guru-parampara.html`, `mumukshuppadi.html`, `tattvatrayam.html`,
  `anushtanams.html`, `science.html` - the notes for each subject
- `css/style.css` - colours, fonts and layout
- `images/` - photos

## Adding notes

Open the subject's page and copy the `<article class="note">` block for each class.
Give each one a new `id` (class-2, class-3 ...).

To write a sloka or pasuram, put it inside the note:

    <p class="verse" lang="sa">first line
    second line</p>

Use `lang="ta"` for Tamil.

## Adding a science discussion

Each article is its own page, kept in a folder per year and month:

    science/2026/november/science-and-vedanta.html

1. Copy an existing article file into the right folder (create `science/YEAR/MONTH/` if needed)
   and replace the title, date and text.
2. In `science.html`, copy one `<a class="tile">` block, point its `href` at the new file,
   and change the heading, one-line description and month.
