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
    "Software engineer with experience at Confluent, contributing to Apache Kafka’s KRaft (ZooKeeper-free) architecture. Currently pursuing an M.S. in Computer Science at Cal State LA, specializing in distributed systems, artificial intelligence, and data science.",
  skills: ["Java", "Go", "C", "Python", "Apache Kafka", "Docker", "Linux"],
  projects: [
    {
      name: "ZephyrCache: Self-Healing Distributed Cache",
      description:
        "A self-healing distributed cache featuring a consistent hashing ring, configurable membership discovery (gossip or etcd), and Phi accrual failure detection. Includes Prometheus metrics, a Grafana dashboard, and Docker Compose for local cluster deployment (in progress).",
      link: "https://github.com/ryandielhenn/zephyrcache",
      skills: ["Go", "Consistent Hashing", "Gossip Protocol", "Phi Accrual Failure Detection", "Prometheus", "Docker", "Distributed Systems"],
    },
    {
      name: "GeoPresence: Spatiotemporal Query System",
      description:
        "A geospatial index and query system for edge computing. For example, imagine air-quality and weather-monitoring devices mounted on city streetlights. Instead of querying a centralized service like weather.com, you could query the streetlight nearest to your location. Uses bitmap compression (RoaringBitmap) and cardinality-estimation algorithms (HyperLogLog/HyperLogLog++) to optimize queries for the time and space constraints of IoT and other low-power devices.",
      link: "https://github.com/USF-BigDataLab/geopresence",
      skills: ["C", "RoaringBitmap", "HyperLogLog++", "Geospatial Indexing", "IoT Optimization"],
    },
    {
      name: "DFS: Distributed Filesystem",
      description:
        "A distributed filesystem built with Java, Netty, and Protocol Buffers. Supports replication, dynamic addition of storage nodes, and compression. Fault tolerant: if a node goes down or data is corrupted, the original data remains available. Bloom filters are used by the controller for probabilistic routing of data requests.",
      link: "https://github.com/ryandielhenn/dfs",
      skills: ["Java", "Netty", "Protocol Buffers", "Bloom Filters", "Distributed Systems"],
    },
    {
      name: "Fire-Engine: Multithreaded Search Engine",
      description:
        "A multithreaded search engine that tracks user queries, enables web crawling, and supports search over an inverted index built from the crawled pages.",
      link: "https://github.com/ryandielhenn/Fire-Engine",
      skills: ["Java", "Multithreading", "Inverted Index", "Web Crawling", "Jetty"],
    },
  ],
  experience: [
    {
      company: "Confluent",
      title: "Software Engineer",
      dateRange: "Jan 2021 – Jul 2022",
      bullets: [
        "Collaborated across engineering teams to improve reliability, observability, and security during Kafka’s transition to a ZooKeeper-free architecture (KRaft).",
        "Adapted Cluster Linking to support KRaft, enabling cross-cluster replication without ZooKeeper.",
        "Integrated metrics to monitor Kafka cluster health in KRaft mode.",
      ],
    },
    {
      company: "Apache Software Foundation",
      title: "Open Source Contributor",
      dateRange: "Aug 2020 – Dec 2020",
      bullets: [
        "Contributed to Apache Kafka following my internship at Confluent, focusing on dynamic client reconfiguration.",
      ],
    },
    {
      company: "Confluent",
      title: "Software Engineering Intern",
      dateRange: "May 2020 – Aug 2020",
      bullets: [
        "Designed and implemented a Kafka feature for dynamic client reconfiguration, allowing users to update producer and consumer settings with a single command—eliminating restarts and reducing operational overhead.",
        "Extended cluster rebalance tooling to support asynchronous log replicas in Confluent Cloud, enabling successful rebalancing for affected customers—shipped within the first month of the internship.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Research Assistant (Distributed Systems & Edge Computing)",
      dateRange: "Jan 2020 – Dec 2020",
      bullets: [
        "Contributed to research in distributed systems and edge computing.",
        "Prototyped and benchmarked performance across varied workloads and programming languages.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Teaching Assistant — Operating Systems & Big Data",
      dateRange: "Aug 2019 – May 2020",
      bullets: [
        "Designed projects and coursework, reviewed student code weekly, and provided feedback with grades.",
        "Held weekly office hours to guide students through project design and debugging.",
      ],
    },
    {
      company: "University of San Francisco",
      title: "Assistant Systems Administrator",
      dateRange: "May 2019 – Aug 2019",
      bullets: [
        "Supported the CS department by updating, patching, and maintaining lab machines, improving system stability for students and faculty.",
      ],
    },
  ],
  education: [
    {
      school: "California State University, Los Angeles",
      degree: "M.S. Computer Science",
      dateRange: "2025 – 2026",
      achievements: [
        "Specializing in distributed systems, artificial intelligence, and data science",
      ],
    },
    {
      school: "University of San Francisco",
      degree: "B.S. Computer Science",
      dateRange: "2016 – 2020",
      achievements: [
        "Graduated Magna Cum Laude with a 3.75 GPA",
        "Minor in Mathematics",
      ],
    },
  ],
};
