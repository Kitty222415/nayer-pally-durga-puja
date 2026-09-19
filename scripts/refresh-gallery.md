# Refreshing the gallery from Facebook

The site gallery is **seeded manually** from publicly visible photos on the committee Facebook page. It does **not** auto-sync.

**Facebook page:** https://www.facebook.com/profile.php?id=100083116423356

## Why there is no live sync

Continuous sync via the Meta Graph API requires a **Page access token** from a page admin (Meta Developer App + page permissions). Without that token, the site cannot pull new photos automatically. Do not claim live Facebook sync in the UI or docs.

## Manual refresh (practical workflow)

1. Open the Facebook page (and Photos tab) while logged in as a page admin if needed for full-resolution assets.
2. Download new publicly shareable JPEGs into `public/gallery/` as `gallery-NN.jpg` (next free number).
3. Update captions in both:
   - `src/data/gallery.json` (used by the site)
   - `public/gallery/manifest.json` (seed inventory)
4. Run `npm run build` and deploy / push.

Optional helper once you have direct image URLs:

```bash
# Example: download one public CDN URL into the gallery folder
curl -L -o public/gallery/gallery-11.jpg "https://example-cdn-url/photo.jpg"
```

## Optional: Facebook Page Plugin

You may embed Meta’s Page Plugin (timeline/photos) on a page **only if it actually renders** without auth for visitors. Prefer the seeded local gallery + “See more on Facebook” CTA when the plugin does not load usefully.
