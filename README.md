# Oneplace

> **A place to find all necessary tools for tech — if you don't find one, create an issue and we'll add it.**

Oneplace is a curated developer reference console and resource hub designed for engineers. It centralizes high-signal roadmaps, system design guides, algorithm patterns, backend engineering deep-dives, real-world production case studies, and open-source discovery tools into one fast, scannable place.

---

## What's Inside

The resources are organized into 4 distinct, dedicated zones:

1. **System Design & Scaling**:
   - Comprehensive roadmaps and distributed systems references (*The System Design Primer*, *DDIA notes*, *ByteByteGo*, *Breakscale*).
   - Real-world production architecture breakdowns from engineering teams (*Figma's multiplayer engine*, *Linear's sync architecture*, *Facebook*, *Twitter Lite*, *Netflix Web Playback*, *Instagram*, *Uber*).

2. **LeetCode Problems & Patterns**:
   - Interactive roadmaps and pattern guides (*GrindMap*, *Blind 75*, *NeetCode 150*, *Grind 75*, *VisuAlgo*, *Learn Algo*).

3. **Backend Concepts & Internals**:
   - Deep dives into storage engines, transaction isolation, networking protocols, and systems architecture (*B-Trees vs LSM-Trees*, *Raft Consensus*, *HTTP/3 QUIC*, *Kafka vs RabbitMQ*, *Linux epoll*, *PostgreSQL MVCC*, *roadmap.sh/backend*).
   - Data model architecture (*Notion's block tree*, *Shopify Hydrogen*, *Medium editor*).

4. **Find Good GitHub Repos**:
   - High-signal platforms to discover active and trending open-source projects (*OpenSox*, *Ossium*).

---

## Features

- **High-Density Developer Console UI**: Clean, distraction-free interface built for fast scanning without generic AI card-shadow fluff.
- **Dark & Light Mode**: Low-fatigue dark theme (`#0D1117`) and crisp light theme (`#FFFFFF`) with instant toggle and persistent local storage.
- **Instant Search & Filter**: Real-time filtering across resources with keyboard focus shortcut (`/` or `Ctrl/Cmd + K`) and instant reset (`Esc`).
- **Personal Pinning**: Bookmark frequently accessed tools directly in your browser's local memory.
- **Copy Direct Link**: 1-click URL copying with visual feedback.
- **SEO & Discoverability**: Semantic HTML5 hierarchy (`h1` → `h2` → `h3`), OpenGraph cards, Twitter preview cards, JSON-LD Schema markup, `sitemap.xml`, and `robots.txt`.
- **Analytics**: Privacy-friendly real-time traffic insights via Vercel Web Analytics.

---

## How to Suggest or Add a Tool

Found an essential system design paper, missing algorithmic pattern, or great developer tool?

1. **Open an Issue**: Head to [GitHub Issues](https://github.com/Rudra2637/One-Place/issues/new) and describe the resource with its URL, category, and why it's useful.
2. **Submit a Pull Request**: Add your resource directly into [`src/data/resources.js`](./src/data/resources.js) and open a PR!

```javascript
{
  id: 'unique-id',
  categoryId: 'system-design | leetcode | backend | github-repos',
  title: 'Resource Title',
  description: 'One-line engineering summary.',
  url: 'https://...',
  source: 'domain.com',
  type: 'Guide | Article | Tool | Repository',
  tag: 'Tag'
}
```

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)

---

## Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Rudra2637/One-Place.git

# Navigate into project directory
cd One-Place

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## License

MIT © [Rudra](https://github.com/Rudra2637)
