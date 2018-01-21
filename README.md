# Quick Start

```
yarn # install modules

yarn start # bundle and start local dev server

yarn build # bundle and copy for release files 

yarn lint # call tslint
```

# Structure

```
.
├── dist # generated
│   ├── icon.png
│   ├── index.html
│   ├── manifest.json
│   └── simple-copy-link.js
├── icon.png # webextension icon
├── manifest.json # webextension manifest
├── node_modules # generated
├── package.json # package config
├── README.md
├── src # core contents
│   ├── app.js # entry point
│   ├── index.html # call entry point and popup menu
│   ├── scripts
│   └── styles
├── tslint.json # lint config
└── yarn.lock # package dependencies info

```


# References

https://developer.chrome.com/extensions/samples

https://developer.chrome.com/extensions/devguide
