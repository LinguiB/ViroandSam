# Basbousa’s Recipe Booklet (installable app)

Files: index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png

## Put it online (GitHub Pages)
1. Create a GitHub repository and upload ALL the files above (keep them in the same folder).
2. Settings > Pages > Deploy from a branch > main > / (root).
3. Open the page link (it must be https).

## Install it like an app
- Android / Chrome: open the link, then menu ⋮ > Install app (or the "Install the app" card in the Contents page).
- iPhone / Safari: Share > Add to Home Screen.
- Computer (Chrome/Edge): the install icon in the address bar.
It then opens full-screen with its own icon and works offline after the first visit online.

## Updating
When you change the files, change `const V="basbousa-v2"` in sw.js to v3, v4... so phones download the new version.

## Store apps (optional)
Upload the live link to https://www.pwabuilder.com to get an Android package (APK/AAB) for Google Play, or wrap it with Capacitor for the App Store.
