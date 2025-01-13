# Quick Start

```
yarn # install modules

yarn build # bundle and copy for devel

yarn release # bundle and copy for release with lint
```

# Structure

```
.
├── dist # generated
│   ├── icon.png
│   ├── manifest.json
│   └── background.js
├── img # webextension icon
│   └── icon.png
├── manifest.json # webextension manifest
├── node_modules # generated
├── package.json # package config
├── privacy.md # privacy policy statement for chrome app store
├── README.md
├── src # core contents
│   └── background.js
└── yarn.lock # package dependencies info

```

# Release

1. Create release file with `yarn release`
2. Make zip file for release with `cd dist; zip dist.zip ./*`
3. Go to upload page and submit dist.zip for Firefox [Upload Add-on :: SLink - Simple copy link :: Add-ons for Firefox](https://addons.mozilla.org/en-US/developers/addon/slink-simple-copy-link/versions/submit/)
4. Go to upload page and submit dist.zip for Chrome [Developer Dashboard - Chrome Web Store](https://chrome.google.com/webstore/developer/dashboard/)

# Privacy
This app will not collect the user data. More detail is available in privacy.md.
