# F. Scent Studio — Luxury Perfume Store

A responsive React + Vite + Tailwind CSS perfume storefront with product search and filters, product details, cart, wishlist, and a demo checkout.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for current Vite versions
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Notes
- Product information is in `src/data/products.js`.
- Cart and wishlist are saved in localStorage in this browser.
- Checkout is a frontend demo only. It does not process payments, submit orders to a server, or send contact messages.
- Product photography loads from Unsplash and requires an internet connection.
