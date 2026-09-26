# Nayer Pally Sealdah Sarbojanin Durga Puja Committee

Official website for **Nayer Pally Sealdah Sarbojanin Durga Puja Committee – Jatio Yuba Sangha**.

A premium, editorial festival site celebrating Durga Puja and community culture in Sealdah, Kolkata (PIN 700009).

**Live site:** https://nayerpallysealdahsarbojanindurgapuja.com

## Branding

| Field | Value |
|--------|--------|
| Full name | Nayer Pally Sealdah Sarbojanin Durga Puja Committee - Jatio Yuba Sangha |
| Organiser | Jatio Yuba Sangha (JATIO YUBA SANGHA) |
| Location | Nayer Pally / Sealdah, Kolkata, West Bengal, India — PIN 700009 |
| Venue | Shraddhananda Park (Sradhananda Park) |
| Email | jatioyubasanghasealdah@gmail.com |
| Phone | +91 98315 93129 |
| Facebook | [facebook.com/profile.php?id=100083116423356](https://www.facebook.com/profile.php?id=100083116423356) |

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- Google Fonts: Cormorant Garamond, Outfit, Noto Sans Bengali

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Deployment (GitHub Pages, custom domain)

The site is a static export (`output: "export"`) served at the root of
https://nayerpallysealdahsarbojanindurgapuja.com — no `basePath`.
`npm run build` writes `out/`, which includes `CNAME` and `.nojekyll` from
`public/`. The contents of `out/` are pushed to the `gh-pages` branch
(Pages source = `gh-pages` branch, custom domain set in the repo Pages settings).

## Site sections

Single-page experience with anchored sections:

1. **Hero** — শুভ দুর্গাপূজা welcome
2. **About** — committee heritage & organiser
3. **Puja Days** — Shashthi → Dashami (dates TBA)
4. **Events & Culture** — including Rath Yatra at Shraddhananda Park
5. **Gallery** — seeded Facebook photos (see `src/data/gallery.json`)
6. **Sponsors** — reserved sponsor slots
7. **Volunteer** — seva call-to-action
8. **Donate / Anjali** — contact-based contributions (no payment gateway)
9. **Contact** — phone, email, Facebook, location
10. **Footer**

## Gallery (Facebook photos)

Gallery images in `public/gallery/` are **manually seeded** from publicly visible photos on the [committee Facebook page](https://www.facebook.com/profile.php?id=100083116423356). Captions live in `src/data/gallery.json` (and `public/gallery/manifest.json`).

**There is no live Facebook sync.** Continuous sync needs a Meta Page access token from a page admin. To refresh photos later, see [`scripts/refresh-gallery.md`](scripts/refresh-gallery.md).

Header logo: `public/brand/logo.jpeg`.

## Placeholders (replace with real assets)

- Sponsor logo slots (6)
- Map embed — add Google Maps / OpenStreetMap pin when exact pandal location is confirmed
- Exact Durga Puja calendar dates for the current year

## Notes

- English is primary; selective Bengali phrases are included (শুভ দুর্গাপূজা, বিজয়া দশমী, etc.).
- No invented member names, sponsors, or exact Pujo dates.
- Palette: deep vermilion/crimson, antique gold, midnight/royal blue, ivory/cream.

## License

Content © Jatio Yuba Sangha / Nayer Pally Sealdah Sarbojanin Durga Puja Committee. Code available for committee use.
