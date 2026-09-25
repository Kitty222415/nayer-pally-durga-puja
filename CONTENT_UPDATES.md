# How to update the site each year

The website picks the **active Puja year** automatically:

- January–October → current calendar year  
- November–December → next calendar year  
- Override anytime with env `NEXT_PUBLIC_PUJA_YEAR=2027`

## What auto-switches with the year

| Area | File |
|------|------|
| English Puja Days | `src/data/years/YYYY.json` → `englishSchedule` |
| Bengali নির্ঘণ্ট | `src/data/years/YYYY.json` → `bengaliSchedule` |
| About / anniversary | same file → `about` (+ auto `{anniversary}`) |
| Events & Visitors copy | same file → `events`, `visitors` |
| Gallery for that year | `src/data/gallery.json` items with `"year": YYYY` |
| Phone / email / address | `src/data/site.json` (all years) |

## Options to update

1. **Ask the assistant** — send new dates, Bengali schedule, text, photos.  
2. **Edit year JSON** — copy `2026.json` → `2027.json`, fill dates, set `"status": "published"`.  
3. **Gallery** — add files to `public/gallery/`, append entries in `gallery.json` with the year.  
4. **Force year** — `NEXT_PUBLIC_PUJA_YEAR=2027` in `.env.local`.

Until a new year is `published`, the site keeps showing the latest published year and notes that the next season is TBA.

## Adding a testimonial (with photo)

Testimonials live in `src/data/years/YYYY.json` → `testimonials.items` and scroll automatically in a carousel (add as many as you like).

1. Put the person's photo (square works best, e.g. 400×400 JPG/PNG) in `public/testimonials/`, e.g. `public/testimonials/rina-das.jpg`. Only use a photo the person has agreed to share.
2. Replace one of the placeholder items (or add a new one) like this:

```json
{
  "placeholder": false,
  "photo": "/testimonials/rina-das.jpg",
  "quote": "Short real quote in their own words.",
  "name": "Rina Das",
  "detail": "Visitor from Howrah",
  "source": "Facebook comment, Oct 2026",
  "sourceUrl": "https://www.facebook.com/..."
}
```

- Leave `"photo": ""` to show the generic avatar instead.
- `source` / `sourceUrl` are optional; remove all items with `"placeholder": true` once real quotes are in.
- Only publish real quotes from real people, with their permission.
