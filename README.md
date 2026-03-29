# salonimehta-legacy

This repository hosts the legacy version of `salonimehta.com`.

## Runtime

- Node: `16.20.2` (recommended)
- npm: `8.x`

## Local development

```bash
source ~/.nvm/nvm.sh
nvm use 16.20.2
npm install --legacy-peer-deps
npm start
```

App runs at `http://127.0.0.1:3000` (or next available port).

## Deployment role

Deploy this repo independently (for example at `legacy.salonimehta.com`).
The hub repository proxies `/legacy/*` to this deployment origin.

## Notes

- This app is intentionally frozen as a legacy archive.
- Bug fixes are allowed; major feature development should happen in the hub/new project architecture.
