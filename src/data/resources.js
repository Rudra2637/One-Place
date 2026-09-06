export const CATEGORIES = [
  {
    id: 'system-design',
    name: 'System Design',
    color: '#7EE787', // Muted mint
    description: 'Distributed architectures, scaling primitives, case studies, and trade-offs.'
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
    name: 'GitHub Repositories',
    color: '#79C0FF', // Muted cyan
    description: 'High-signal open-source repositories, reference implementations, and learning curricula.'
  }
];

export const RESOURCES = [
  // --- SYSTEM DESIGN ---
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

  // --- LEETCODE & PATTERNS ---
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
    id: 'lc-3',
    categoryId: 'leetcode',
    title: 'LC #146: LRU Cache',
    description: 'Hash map paired with a doubly-linked list for O(1) average lookup and eviction mechanics.',
    url: 'https://leetcode.com/problems/lru-cache/',
    source: 'leetcode.com',
    type: 'Problem',
    tag: 'LC #146'
  },
  {
    id: 'lc-4',
    categoryId: 'leetcode',
    title: 'LC #200: Number of Islands',
    description: 'Archetypal 2D grid matrix traversal using iterative BFS with queue or recursive DFS component coloring.',
    url: 'https://leetcode.com/problems/number-of-islands/',
    source: 'leetcode.com',
    type: 'Problem',
    tag: 'LC #200'
  },
  {
    id: 'lc-5',
    categoryId: 'leetcode',
    title: 'LC #42: Trapping Rain Water',
    description: 'Two-pointer bounded minimum elevation technique and monotonic decreasing stack formulation.',
    url: 'https://leetcode.com/problems/trapping-rain-water/',
    source: 'leetcode.com',
    type: 'Problem',
    tag: 'LC #42'
  },
  {
    id: 'lc-6',
    categoryId: 'leetcode',
    title: 'LC #23: Merge k Sorted Lists',
    description: 'Min-heap priority queue k-way merge vs divide-and-conquer pairwise merge comparisons.',
    url: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    source: 'leetcode.com',
    type: 'Problem',
    tag: 'LC #23'
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

  // --- BACKEND CONCEPTS & INTERNALS ---
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

  // --- GITHUB REPOSITORIES ---
  {
    id: 'gh-1',
    categoryId: 'github-repos',
    title: 'kamranahmedse/developer-roadmap',
    description: 'Interactive visual roadmaps, study guides, and milestone pathways for backend, DevOps, and cloud systems.',
    url: 'https://github.com/kamranahmedse/developer-roadmap',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 310k'
  },
  {
    id: 'gh-2',
    categoryId: 'github-repos',
    title: 'kelseyhightower/kubernetes-the-hard-way',
    description: 'Bootstrap a production Kubernetes cluster on bare compute from scratch without automated installers.',
    url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 39k'
  },
  {
    id: 'gh-3',
    categoryId: 'github-repos',
    title: 'jwasham/coding-interview-university',
    description: 'Complete computer science study curriculum to transition from self-taught to senior software engineer.',
    url: 'https://github.com/jwasham/coding-interview-university',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 320k'
  },
  {
    id: 'gh-4',
    categoryId: 'github-repos',
    title: 'torvalds/linux',
    description: 'Linux kernel source tree: the foundational bedrock of modern server infrastructure and cloud OS runtime.',
    url: 'https://github.com/torvalds/linux',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 185k'
  },
  {
    id: 'gh-5',
    categoryId: 'github-repos',
    title: 'redis/redis',
    description: 'In-memory database that persists on disk; quintessential C codebase benchmark for low-latency network I/O.',
    url: 'https://github.com/redis/redis',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 68k'
  },
  {
    id: 'gh-6',
    categoryId: 'github-repos',
    title: 'prometheus/prometheus',
    description: 'Cloud native monitoring system and TSDB metrics collector written in Go with PromQL query engine.',
    url: 'https://github.com/prometheus/prometheus',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 56k'
  },
  {
    id: 'gh-7',
    categoryId: 'github-repos',
    title: 'minio/minio',
    description: 'High-performance, S3-compatible enterprise object storage server architected for high-density disks.',
    url: 'https://github.com/minio/minio',
    source: 'github.com',
    type: 'Repository',
    tag: '★ 51k'
  }
];
