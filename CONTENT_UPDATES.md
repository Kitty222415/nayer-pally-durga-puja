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
