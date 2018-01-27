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
