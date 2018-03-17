# Quick Start

```
yarn # install modules

yarn build # bundle and copy for devel

yarn release # bundle and copy for release with lint

yarn lint # call tslint
```

# Structure

```
.
├── dist # generated
│   ├── icon.png
│   ├── manifest.json
│   └── simple-copy-link.js
├── icon.png # webextension icon
├── manifest.json # webextension manifest
├── node_modules # generated
├── package.json # package config
├── README.md
├── src # core contents
│   ├── app.js # entry point
│   ├── scripts
│   └── styles
├── tslint.json # lint config
└── yarn.lock # package dependencies info

```


# References

https://developer.chrome.com/extensions/samples

https://developer.chrome.com/extensions/devguide

# Release

1. Create release file with `yarn release`
2. Make zip file for release with `cd dist; zip dist.zip ./*`
3. Go to upload page and submit dist.zip for Firefox [Upload Add-on :: SLink - Simple copy link :: Add-ons for Firefox](https://addons.mozilla.org/en-US/developers/addon/slink-simple-copy-link/versions/submit/)
4. Go to upload page and submit dist.zip for Chrome [Developer Dashboard - Chrome Web Store](https://chrome.google.com/webstore/developer/dashboard/)

