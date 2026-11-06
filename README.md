# Ponnadiyaam Sengamalam

Live site: https://sangeerth-p.github.io/jeeyar_swami_class_notes/

## Files

- `index.html` - home page
- `about.html` - Jeeyar Swami details and the Saligrama temple
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

In `science.html`, add a link in the `pills` box (e.g. `#discussion-3`) and
copy an `<article>` with the same id.
