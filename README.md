# ✈ Trippy Planner

A dark-themed, browser-based travel itinerary planner. Plan your trip day by day, track costs, and view everything in a full calendar view.

## Features

- 📅 **Date picker** — dropdown calendar to pick travel dates
- 🗺 **Destination-first** — add a day with just a date and destination; fill in details later
- 🃏 **Expandable day cards** — click any day to reveal accommodation, costs, travel notes, and toggles
- 📊 **Live metrics** — total days, travel days, and total cost (AUD)
- 📆 **Calendar view** — full monthly calendar showing destinations and activities
- 💾 **CSV export / import** — download your plan and reload it any time
- 🌙 **Dark theme** — clean, minimal dark UI

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/trippy-planner.git
cd trippy-planner

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output goes to `dist/`. You can host it anywhere — GitHub Pages, Netlify, Vercel, etc.

## Deploying to GitHub Pages (free hosting)

1. Push your repo to GitHub
2. Install the deploy plugin:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo → **Settings → Pages** → set source to `gh-pages` branch

## Project Structure

```
trippy-planner/
├── index.html          # Entry point
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.js         # Bootstrap
    ├── app.js          # App shell & wiring
    ├── store.js        # State + localStorage persistence
    ├── datepicker.js   # Dropdown calendar component
    ├── planner.js      # Planner tab renderer
    ├── calendar.js     # Calendar tab renderer
    └── style.css       # All styles
```

## Roadmap Ideas

- 🗺 Google Maps / Places autocomplete for destinations
- 🌐 Multi-currency support
- 🖨 Print / PDF export
- 👥 Shared trips (via URL or backend)
- 📱 PWA / offline support

## License

MIT
