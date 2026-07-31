const resumeData = {
  header: {
    name: "Jimmy Hoang",
    location: "Albuquerque, NM",
    email: "j1mm4hoang@gmail.com",
    phone: "505-377-7204",
  },

  education: {
    title: "Education & Credentials",
    school: "University of New Mexico",
    degree: "Bachelor of Science in Computer Science",
    coursework: [
      "Software Engineering",
      "Operating Systems",
      "Algorithms",
      "Cybersecurity",
    ],
    location: "Albuquerque, NM",
    graduation: "May 2026",
  },

  experience: [
    {
      company: "CSBS COMPUTING, UNIVERSITY OF UTAH",
      position: "Work Study Office Tech",
      location: "Salt Lake City, UT",
      duration: "Sep 2022 — Sep 2023",
      bullets: [
        "Delivered technical support by troubleshooting operating system, hardware, software, networking, and workstation issues across multiple university departments, using structured troubleshooting techniques to maintain reliable computing resources.",
        "Assisted with system deployments, software installations, and routine workstation maintenance while collaborating with professional IT staff to minimize downtime and ensure stable day-to-day operations.",
        "Maintained IT hardware inventory by tracking equipment, preparing systems for deployment or retirement, and assisting with asset organization and lifecycle management.",
      ],
    },
  ],

  leadership: [
    {
      organization: "2024 Winter Classic Invitational Student Cluster Competition",
      role: "Team Member",
      location: "Albuquerque, NM",
      duration: "Jan 2024 — Apr 2024",
      bullets: [
        "Scheduled, managed, and optimized parallel workloads using Slurm on multi-node production HPC clusters, including benchmarking industry-standard HPL and HPCG applications; performed detailed profiling, performance tuning, and resource allocation to maximize throughput and efficiency.",
        "Achieved 2nd place out of 9 national teams by executing optimized workflows for HPC applications from U.S. national labs, coordinating with teammates to use best practices in parallel computing and performance analysis.",
      ],
    },
    {
      organization: "UNM Japanese Language and Culture Club",
      role: "Treasurer and Secretary",
      location: "Albuquerque, NM",
      duration: "Aug 2025 — May 2026",
      bullets: [
        "Managed finances, administrative documentation, and meeting logistics for a student cultural organization, coordinating communication among members to foster engagement and language practice in collaboration with other officers.",
        "Planned and executed joint events with four student organizations by coordinating event logistics, facilitating communication between leadership teams, and managing member outreach across Instagram, LINE, and email.",
      ],
    },
  ],

  skills: {
    Languages: [
      "Java",
      "Python",
      "C",
      "C++",
      "JavaScript",
      "HTML/CSS",
      "SQL",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    "Operating Systems": [
      "Linux (Ubuntu)",
      "Windows",
    ],
    Tools: [
      "Git",
      "GitHub",
      "MySQL",
      "Slurm",
    ],
  },

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      status: "In Progress",
    },
    {
      name: "PADI Open Water Diver",
      status: null,
    },
    {
      name: "120-Hour TEFL/TESOL Certification",
      status: null,
    },
    {
      name: "Japanese Language Proficiency Test (JLPT N4)",
      status: "In Progress",
    },
  ],
};

export default resumeData;