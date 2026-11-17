# mmcbloodstripe.com

Static website for the Marines MC BloodStripe Chapter, published by GitHub Pages from `main`.

## Pages

- `index.html`: chapter introduction and homepage links.
- `about.html`: chapter history and values.
- `gallery.html`: chapter photos and full-size photo viewer.
- `events.html`: BloodStripe Chapter events.
- `bufa-calendar.html`: separate BUFA community calendar.
- `contact.html`: existing chapter contact form.

All pages use `site.css` and `site.js`. Keep the navigation and footer links consistent across the six HTML files; set `aria-current="page"` only on the current navigation item. Legacy homepage section links redirect to their new pages.

The homepage video, gallery viewer, and BUFA calendar have separate scripts. Update `calendarYear` and the event entries in `bufa-calendar.js` for a new calendar year. Each event contains its zero-based month, day or day range, title, and details; an optional fifth value of `true` marks a priority event and sorts it before other events starting on the same day. Calendar-specific styling is in `bufa-calendar.css`.

For a local preview, run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8000`.
