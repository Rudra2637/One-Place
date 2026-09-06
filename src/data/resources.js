export const CATEGORIES = [
  {
    id: 'system-design',
    name: 'System Design',
    color: '#7EE787', // Muted mint
    description: 'Distributed architectures, scaling primitives, real-world case studies, and trade-offs.'
  },
  {
    id: 'leetcode',
    name: 'LeetCode Problems & Patterns',
    color: '#F2CC60', // Muted amber
    description: 'Essential data structure patterns, algorithm roadmaps, and key interview problems.'
  },
  {
    id: 'backend',
    name: 'Backend Concepts & Internals',
    color: '#BC8CFF', // Muted lavender
    description: 'Database engines, transaction isolation, networking protocols, and operating systems.'
  },
  {
    id: 'github-repos',
    name: 'Find Good GitHub Repos',
    color: '#79C0FF', // Muted cyan
    description: 'Curated open-source discovery tools, reference codebases, and learning curricula.'
  }
];

export const RESOURCES = [
  // =========================================================================
  // --- SYSTEM DESIGN ---
  // =========================================================================
  {
    id: 'sd-user-1',
    categoryId: 'system-design',
    title: 'liquidslr/system-design-notes',
    description: 'Comprehensive repository covering system design concepts, patterns, scalability, and interview preparation.',
    url: 'https://github.com/liquidslr/system-design-notes',
    source: 'github.com',
    type: 'Repository',
    tag: 'Notes'
  },
  {
    id: 'sd-user-2',
    categoryId: 'system-design',
    title: 'xevrion/breakscale',
    description: 'Deep dive into system bottlenecks, reliability engineering, and what happens when architectures scale.',
    url: 'https://github.com/xevrion/breakscale',
    source: 'github.com',
    type: 'Repository',
    tag: 'Scaling'
  },
  {
    id: 'sd-user-8',
    categoryId: 'system-design',
    title: 'subhashchy/The-Accidental-CTO',
    description: 'Pragmatic engineering playbook covering architectural trade-offs, tech stacks, and scaling real startups.',
    url: 'https://github.com/subhashchy/The-Accidental-CTO',
    source: 'github.com',
    type: 'Repository',
    tag: 'Architecture'
  },
  {
    id: 'sd-1',
    categoryId: 'system-design',
    title: 'The System Design Primer',
    description: 'Organized roadmap and cheat sheet for designing large-scale distributed systems and interview prep.',
    url: 'https://github.com/donnemartin/system-design-primer',
    source: 'github.com',
    type: 'Guide',
    tag: 'Reference'
  },
  {
    id: 'sd-2',
    categoryId: 'system-design',
    title: 'Designing Data-Intensive Applications (DDIA Notes)',
    description: 'Key architectural insights on storage engines, consensus models, replication logs, and partition schemes.',
    url: 'https://github.com/ept/ddia-references',
    source: 'oreilly.com',
    type: 'Book Notes',
    tag: 'Core'
  },
  {
    id: 'sd-3',
    categoryId: 'system-design',
    title: 'ByteByteGo System Design Newsletter',
    description: 'Clear architectural breakdowns of real-world systems: payment gateways, CDNs, and chat infrastructure.',
    url: 'https://blog.bytebytego.com/',
    source: 'bytebytego.com',
    type: 'Articles',
    tag: 'Deep-dive'
  },
  {
    id: 'sd-art-9',
    categoryId: 'system-design',
    title: "Figma: How Figma's multiplayer technology works",
    description: 'Deep dive into distributed real-time state synchronization, operational transformations, and WebSocket server architecture.',
    url: 'https://lnkd.in/gX2gN72y',
    source: 'figma.com',
    type: 'Article',
    tag: 'Sync / CRDT'
  },
  {
    id: 'sd-art-12',
    categoryId: 'system-design',
    title: 'Linear: Scaling the Linear sync engine',
    description: 'Architecture of local-first sync, client-side SQLite/IndexedDB state caching, and conflict resolution at scale.',
    url: 'https://lnkd.in/gj2dpJRE',
    source: 'linear.app',
    type: 'Article',
    tag: 'Sync Engine'
  },
  {
    id: 'sd-art-1',
    categoryId: 'system-design',
    title: 'Facebook: Rebuilding our tech stack for the new Facebook.com',
    description: 'Complete architecture rewrite focused on Relay, GraphQL code splitting, resource prefetching, and render performance.',
    url: 'https://lnkd.in/g6xi78nB',
    source: 'engineering.fb.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-2',
    categoryId: 'system-design',
    title: 'Twitter: How we built Twitter Lite',
    description: 'Progressive web app architecture optimizing data usage, bundle size, and service worker caching for 3G networks.',
    url: 'https://lnkd.in/gf2Bg856',
    source: 'blog.twitter.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-3',
    categoryId: 'system-design',
    title: 'Instagram: Making Instagram faster',
    description: 'Strategies for reducing app cold start, feed prefetching pipelines, and optimizing end-to-end network latency.',
    url: 'https://lnkd.in/gpVuyN4Q',
    source: 'instagram.com',
    type: 'Article',
    tag: 'Performance'
  },
  {
    id: 'sd-art-4',
    categoryId: 'system-design',
    title: "Airbnb: Rearchitecting Airbnb's frontend",
    description: 'Migrating from a legacy monolith to server-driven UI, page-level hydration, and service-oriented web architecture.',
    url: 'https://lnkd.in/g_UcEeey',
    source: 'medium.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-5',
    categoryId: 'system-design',
    title: 'Pinterest: A Progressive Web App Performance Case Study',
    description: 'How architectural performance investments increased user engagement and reduced mobile load times by 40%.',
    url: 'https://lnkd.in/gdXE7DcY',
    source: 'medium.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-6',
    categoryId: 'system-design',
    title: 'YouTube: Building a better web: A faster YouTube',
    description: 'Modularizing YouTube web video player pipelines, Web Component architectures, and streaming optimization.',
    url: 'https://lnkd.in/gREH6nPj',
    source: 'youtube.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-7',
    categoryId: 'system-design',
    title: 'Netflix: Modernizing the Web Playback UI',
    description: 'Eliminating React from client playback UI to maximize memory efficiency and startup speed on constrained hardware.',
    url: 'https://lnkd.in/gR_B8tHA',
    source: 'netflixtechblog.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-8',
    categoryId: 'system-design',
    title: 'Spotify: Building the future of our desktop apps',
    description: 'Architecting a high-performance desktop framework across Electron and Chromium embedded frameworks.',
    url: 'https://lnkd.in/gs2Ew_9x',
    source: 'spotify.com',
    type: 'Article',
    tag: 'Architecture'
  },
  {
    id: 'sd-art-11',
    categoryId: 'system-design',
    title: 'Google Photos: Building the Google Photos Web UI',
    description: 'Virtual scrolling 100,000+ photo grids with 60 FPS, WebGL canvas shaders, and progressive image decoding.',
    url: 'https://lnkd.in/g58YvKB5',
    source: 'medium.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-art-15',
    categoryId: 'system-design',
    title: 'Atlassian: Rendering like Butter – a Confluence Whiteboards Story',
    description: 'Canvas rendering pipeline, spatial indexing, and hardware acceleration for infinite whiteboards collaboration.',
    url: 'https://lnkd.in/g4Q5Ju7d',
    source: 'atlassian.com',
    type: 'Article',
    tag: 'Case Study'
  },
  {
    id: 'sd-4',
    categoryId: 'system-design',
    title: 'High Scalability Real-World Architectures',
    description: 'Comprehensive historical archive of architecture case studies from YouTube, Twitter, and StackOverflow.',
    url: 'http://highscalability.com/all-time-favorites/',
    source: 'highscalability.com',
    type: 'Case Studies',
    tag: 'Architecture'
  },
  {
    id: 'sd-5',
    categoryId: 'system-design',
    title: 'Microservices Pattern Language (Chris Richardson)',
    description: 'Decomposition strategies, Saga distributed transactions, CQRS, and transactional outbox patterns.',
    url: 'https://microservices.io/patterns/index.html',
    source: 'microservices.io',
    type: 'Patterns',
    tag: 'Architecture'
  },
  {
    id: 'sd-6',
    categoryId: 'system-design',
    title: 'Uber Engineering Architecture Blog',
    description: 'Engineering retrospectives on distributed real-time scheduling, geospatial indexing (H3), and tracing.',
    url: 'https://www.uber.com/en-US/blog/engineering/',
    source: 'uber.com',
    type: 'Case Studies',
    tag: 'Production'
  },
  {
    id: 'sd-7',
    categoryId: 'system-design',
    title: 'Cloudflare Learning Center',
    description: 'Precise conceptual explainers on Anycast routing, DDoS mitigation, TLS handshakes, and edge computation.',
    url: 'https://www.cloudflare.com/learning/',
    source: 'cloudflare.com',
    type: 'Reference',
    tag: 'Networking'
  },

  // =========================================================================
  // --- LEETCODE PROBLEMS & PATTERNS ---
  // =========================================================================
  {
    id: 'lc-user-learnalgo',
    categoryId: 'leetcode',
    title: 'Learn Algo',
    description: 'Interactive visual playground to step through, explore, and master foundational algorithms and data structures.',
    url: 'https://learn-algo-gold.vercel.app/',
    source: 'learn-algo-gold.vercel.app',
    type: 'Interactive',
    tag: 'Visualizer'
  },
  {
    id: 'lc-user-3',
    categoryId: 'leetcode',
    title: 'GrindMap (Interactive LeetCode Roadmap)',
    description: 'Interactive visual roadmap for mastering DSA problems, topic dependencies, and technical interview patterns.',
    url: 'https://grindmap.xevrion.dev/',
    source: 'grindmap.xevrion.dev',
    type: 'Tool',
    tag: 'Roadmap'
  },
  {
    id: 'lc-1',
    categoryId: 'leetcode',
    title: 'Blind 75 Essential LeetCode Questions',
    description: 'The standard curated list of 75 coding interview questions grouped by foundational pattern.',
    url: 'https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions',
    source: 'leetcode.com',
    type: 'Curated List',
    tag: 'Blind 75'
  },
  {
    id: 'lc-2',
    categoryId: 'leetcode',
    title: 'NeetCode 150 Roadmap',
    description: 'Structured visual pattern tree covering two pointers, sliding window, DP, backtracking, and graphs.',
    url: 'https://neetcode.io/roadmap',
    source: 'neetcode.io',
    type: 'Roadmap',
    tag: 'Core'
  },
  {
    id: 'lc-7',
    categoryId: 'leetcode',
    title: 'Tech Interview Handbook (Grind 75)',
    description: 'Customizable algorithmic study schedule adjusted by available preparation weeks and target tier.',
    url: 'https://www.techinterviewhandbook.org/grind75',
    source: 'techinterviewhandbook.org',
    type: 'Study Guide',
    tag: 'Grind 75'
  },
  {
    id: 'lc-8',
    categoryId: 'leetcode',
    title: 'VisuAlgo - Data Structure Visualizations',
    description: 'Interactive stepping animations for binary search trees, graph shortest path, and sorting algorithms.',
    url: 'https://visualgo.net/',
    source: 'visualgo.net',
    type: 'Interactive',
    tag: 'Visualizer'
  },

  // =========================================================================
  // --- BACKEND CONCEPTS & INTERNALS ---
  // =========================================================================
  {
    id: 'be-user-6',
    categoryId: 'backend',
    title: 'Backend Developer Roadmap (roadmap.sh)',
    description: 'Community-standard interactive roadmap of technologies, networking protocols, databases, and APIs.',
    url: 'https://roadmap.sh/backend',
    source: 'roadmap.sh',
    type: 'Roadmap',
    tag: 'Roadmap'
  },
  {
    id: 'be-user-7',
    categoryId: 'backend',
    title: 'Backend from First Principles',
    description: 'Foundational guide deconstructing backend systems from network sockets and concurrency models to databases.',
    url: 'https://backend-from-first-principle.vercel.app/',
    source: 'vercel.app',
    type: 'Guide',
    tag: 'First Principles'
  },
  {
    id: 'be-user-9',
    categoryId: 'backend',
    title: 'harshit3011/Technical-Engineering-Articles',
    description: 'Curated collection of high-signal engineering and distributed systems blogs from top technology companies.',
    url: 'https://github.com/harshit3011/Technical-Engineering-Articles',
    source: 'github.com',
    type: 'Repository',
    tag: 'Articles'
  },
  {
    id: 'be-art-10',
    categoryId: 'backend',
    title: "Notion: The data model behind Notion's flexibility",
    description: 'Deep dive into Notion database architecture, blocks hierarchy, recursive data trees, and state synchronization.',
    url: 'https://lnkd.in/gMT5ZqUA',
    source: 'notion.so',
    type: 'Article',
    tag: 'Data Model'
  },
  {
    id: 'be-art-13',
    categoryId: 'backend',
    title: 'Shopify: How we built Hydrogen: A React framework for storefronts',
    description: 'Streaming SSR, edge runtime caching architectures, and building specialized eCommerce data-fetching engines.',
    url: 'https://lnkd.in/g9xwMEBF',
    source: 'shopify.engineering',
    type: 'Article',
    tag: 'Architecture'
  },
  {
    id: 'be-art-14',
    categoryId: 'backend',
    title: 'Medium: How the Medium editor works',
    description: 'DOM state management, contentEditable mechanics, tree diffing, and cross-platform document rendering.',
    url: 'https://lnkd.in/gnYRQxVY',
    source: 'medium.engineering',
    type: 'Article',
    tag: 'Internals'
  },
  {
    id: 'be-1',
    categoryId: 'backend',
    title: 'Database Indexing: B-Trees vs LSM Trees',
    description: 'Deep dive into block storage, write amplification, random I/O vs sequential write logs, and SSTables.',
    url: 'https://planetscale.com/blog/btrees-and-database-indexes',
    source: 'planetscale.com',
    type: 'Article',
    tag: 'Storage'
  },
  {
    id: 'be-2',
    categoryId: 'backend',
    title: 'The Secret Lives of Data: Raft Consensus',
    description: 'Visual step-through of leader election, log replication, and heartbeat timeouts in distributed Raft.',
    url: 'http://thesecretlivesofdata.com/raft/',
    source: 'thesecretlivesofdata.com',
    type: 'Interactive',
    tag: 'Consensus'
  },
  {
    id: 'be-3',
    categoryId: 'backend',
    title: 'ACID Transactions & SQL Isolation Levels',
    description: 'Dirty reads, non-repeatable reads, phantom anomalies, and snapshot isolation in relational engines.',
    url: 'https://martinfowler.com/articles/patterns-of-distributed-systems/',
    source: 'martinfowler.com',
    type: 'Architecture',
    tag: 'Databases'
  },
  {
    id: 'be-4',
    categoryId: 'backend',
    title: 'Evolution of Transport: HTTP/1.1 to HTTP/3 (QUIC)',
    description: 'Multiplexed byte streams, HOL blocking elimination, 0-RTT handshakes, and UDP user-space congestion control.',
    url: 'https://blog.cloudflare.com/http3-the-past-present-and-future/',
    source: 'cloudflare.com',
    type: 'Deep-dive',
    tag: 'Networking'
  },
  {
    id: 'be-5',
    categoryId: 'backend',
    title: 'Kafka vs RabbitMQ Architectural Trade-offs',
    description: 'Immutable partitioned commit log semantics vs AMQP routing exchanges and smart broker / dumb consumer.',
    url: 'https://www.confluent.io/blog/kafka-vs-rabbitmq/',
    source: 'confluent.io',
    type: 'Guide',
    tag: 'Messaging'
  },
  {
    id: 'be-6',
    categoryId: 'backend',
    title: 'Linux I/O Multiplexing: select, poll, and epoll',
    description: 'OS kernel notification mechanics, file descriptor readiness, and O(1) event notification in Linux.',
    url: 'https://man7.org/linux/man-pages/man7/epoll.7.html',
    source: 'man7.org',
    type: 'Man Page',
    tag: 'Linux'
  },
  {
    id: 'be-7',
    categoryId: 'backend',
    title: 'PostgreSQL Architecture & MVCC Internals',
    description: 'Process model, shared buffer pool, Write-Ahead Logging (WAL), transaction IDs, and vacuum mechanics.',
    url: 'https://www.postgresql.org/docs/current/wal-intro.html',
    source: 'postgresql.org',
    type: 'Documentation',
    tag: 'Postgres'
  },
  {
    id: 'be-8',
    categoryId: 'backend',
    title: 'Redis In-Memory Architecture & Persistence',
    description: 'Single-threaded event loop, SDS strings, ziplists, skiplists, RDB snapshotting, and AOF rewrite logging.',
    url: 'https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/',
    source: 'redis.io',
    type: 'Documentation',
    tag: 'Caching'
  },

  // =========================================================================
  // --- FIND GOOD GITHUB REPOS ---
  // =========================================================================
  {
    id: 'gh-user-4',
    categoryId: 'github-repos',
    title: 'OpenSox (opensox.ai)',
    description: 'AI-powered open source repository discovery engine and intelligent GitHub codebase search.',
    url: 'https://opensox.ai/',
    source: 'opensox.ai',
    type: 'Tool',
    tag: 'Discovery'
  },
  {
    id: 'gh-user-5',
    categoryId: 'github-repos',
    title: 'Ossium (ossium.in)',
    description: 'Curated platform to discover high-signal, active, and trending open-source GitHub projects.',
    url: 'https://ossium.in/',
    source: 'ossium.in',
    type: 'Tool',
    tag: 'Trending OSS'
  }
];
