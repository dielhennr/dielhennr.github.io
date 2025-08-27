export const siteConfig = {
  name: "Ryan Dielhenn",
  title: "Software Engineer\nM.S. Computer Science Student",
  description: "Portfolio website of Ryan Dielhenn",
  accentColor: "#1d4ed8",
  resume: "/ryan_dielhenn_resume.pdf",
  social: {
    email: "dielhennr@gmail.com",
    linkedin: "https://linkedin.com/in/ryandielhenn",
    github: "https://github.com/ryandielhenn",
  },
  aboutMe:
    "Software engineer with experience at Confluent, contributing to Apache Kafka’s KRaft (ZooKeeper-free) architecture. Currently pursuing an M.S. in Computer Science at Cal State LA with a focus on distributed systems, artificial intelligence, and data science.",
  skills: ["Java", "Golang", "C", "Python", "Kafka", "Docker"],
  projects: [
    {
      name: "Zephyrcache: self-healing distributed cache",
      description:
        "A self-healing distributed cache system with consistent hashing ring, membership discovery via gossip/etcd (configurable), and phi accrual failure detection. Features tunable consistency with R/W quorums, replication factor, hinted handoff, read-repair, and anti-entropy with Merkle trees. Includes TTL + LRU eviction, Prometheus metrics, and Docker Compose for local cluster deployment (In Progress).",
      link: "https://github.com/ryandielhenn/zephyrcache",
      skills: ["Golang", "Consistent Hashing", "Gossip Protocol", "Phi Accrual Failure Detection", "Distributed Systems", "Prometheus", "Docker"],
    },
    {
      name: "Geopresence: spatiotemporal query system",
      description:
        "The main idea behind this work is to create a geospatial index and query system for edge computing. For a simplistic example, imagine air quality and weather monitoring devices placed on streetlights in a city; instead of querying weather.com query the streetlight across the street from the restaurant you're going to. Used bitmap compression (RoaringBitmap) and cardinality estimation algorithms (HyperLogLog/HyperLogLog++) to optimize the query system for various time and space constraints presented by IoT/low power devices.",
      link: "https://github.com/USF-BigDataLab/geopresence",
      skills: ["C", "RoaringBitmap", "HyperLogLog++", "Geospatial Indexing", "IoT Optimization"],
    },
    {
      name: "DFS: distributed filesystem",
      description:
        "A distributed filesystem built with Java, Netty, and Google Protocol Buffers. The filesystem supports replication, dynamic addition of storage nodes, and compression. The system is also fault tolerant in that if a node goes down or data is corrupted the original data is still available. Bloom filters are used by the controller for probabilistic routing to data requests.",
      link: "https://github.com/ryandielhenn/dfs",
      skills: ["Java", "Netty", "Protocol Buffers", "Bloom Filters", "Distributed Systems"],
    },
    {
      name: "Fire-Engine: multi-threaded search engine",
      description:
        "A multi-threaded search engine that tracks user searches, allows users to crawl web pages, and search an inverted index built from crawled web pages.",
      link: "https://github.com/ryandielhenn/Fire-Engine",
      skills: ["Java", "Multi-threading", "Inverted Index", "Web Crawling", "Jetty"],
    },
  ],
  experience: [
    {
      company: "Confluent",
      title: "Software Engineer",
      dateRange: "Jan 2021 - July 2022",
      bullets: [
        "Collaborated across engineering teams to improve system reliability, observability, and security during Kafka’s transition to a ZooKeeper-free architecture.",
        "Developed tooling and integrated metrics pipelines to monitor Kafka’s internal state during KRaft migration, enabling teams to track cluster health, debug failures, and validate quorum behavior in production.",
      ],
    },
    {
      company: "Apache Software Foundation",
      title: "Open Source Contributor",
      dateRange: "Aug 2020 - Dec 2020",
      bullets: [
        "Continued contributing to Apache Kafka after my internship at Confluent.",
      ],
    },
    {
      company: "Confluent",
      title: "Software Engineering Intern",
      dateRange: "May 2020 - Aug 2020",
      bullets: [
          "Designed and implemented a Kafka feature for dynamic client reconfiguration, allowing users to update producer and consumer settings with a single command—eliminating restarts and reducing operational overhead.",
          "Extended cluster rebalance tooling to support asynchronous log replicas in Confluent Cloud, enabling successful rebalancing for affected customers—shipped within the first month of the internship.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Research Assistant",
      dateRange: "Jan 2020 - Dec 2020",
      bullets: [
          "Contributed to research in distributed systems and edge computing.",
          "Prototyped and benchmarked system performance across varied workloads and programming languages.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Teaching Assistant for CS326 (Operating Systems) and CS677 (Big Data)",
      dateRange: "Aug 2019 - May 2020",
      bullets: [
          "Designed projects/coursework, reviewed student code weekly, and gave grades with feedback.",
          "Held weekly office hours to help students design/debug projects.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Assistant Systems Administrator",
      dateRange: "May 2019 - Aug 2019",
      bullets: [
          "Assisted the CS support team at USF by updating and maintaining all of the department’s lab machines.",
      ],
    },
  ],
  education: [
    {
      school: "California State University, Los Angeles",
      degree: "Master of Science in Computer Science",
      dateRange: "2025 - 2026",
      achievements: [
        "Specializing in distributed systems, artificial intelligence, and data science",
      ],
    },
    {
      school: "University of San Francisco",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2016 - 2020",
      achievements: [
        "Graduated Magna Cum Laude with 3.75 GPA",
        "Received a minor in mathematics",
      ],
    },
  ],
};
