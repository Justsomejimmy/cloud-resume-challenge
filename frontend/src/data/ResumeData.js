const resumeData = {
  header: {
    name: "Jimmy Hoang",
    location: "Albuquerque, NM",
    email: "j1mm4hoang@gmail.com",
    phone: "505-377-7204",
  },

  education: {
    title: "Education & Credentials",
    type: "items",
    data: [
      {
        id: 1,
        title: "University of New Mexico",
        subtitle: "Bachelor of Science in Computer Science",
        secondarySubtitle:
          "Relevant Coursework: Software Engineering, Operating Systems, Algorithms, Cybersecurity",
        location: "Albuquerque, NM",
        duration: "May 2026",
      },
    ],
  },

  experience: {
    title: "Work Experience",
    type: "items",
    data: [
      {
        id: 2,
        title: "CSBS COMPUTING, UNIVERSITY OF UTAH",
        subtitle: "Work Study Office Tech",
        location: "Salt Lake City, UT",
        duration: "Sep 2022 — Sep 2023",
        details: [
          "Delivered technical support by troubleshooting operating system, hardware, software, networking, and workstation issues across multiple university departments, using structured troubleshooting techniques to maintain reliable computing resources.",
          "Assisted with system deployments, software installations, and routine workstation maintenance while collaborating with professional IT staff to minimize downtime and ensure stable day-to-day operations.",
          "Maintained IT hardware inventory by tracking equipment, preparing systems for deployment or retirement, and assisting with asset organization and lifecycle management.",
        ],
      },
    ],
  },

  leadership: {
    title: "Leadership & Activities",
    type: "items",
    data: [
      {
        id: 3,
        title: "2024 Winter Classic Invitational Student Cluster Competition",
        subtitle: "Team Member",
        location: "Albuquerque, NM",
        duration: "Jan 2024 — Apr 2024",
        details: [
          "Scheduled, managed, and optimized parallel workloads using Slurm on multi-node production HPC clusters, including benchmarking industry-standard HPL and HPCG applications; performed detailed profiling, performance tuning, and resource allocation to maximize throughput and efficiency.",
          "Achieved 2nd place out of 9 national teams by executing optimized workflows for HPC applications from U.S. national labs, coordinating with teammates to use best practices in parallel computing and performance analysis.",
        ],
      },
      {
        id: 4,
        title: "UNM Japanese Language and Culture Club",
        subtitle: "Treasurer and Secretary",
        location: "Albuquerque, NM",
        duration: "Aug 2025 — May 2026",
        details: [
          "Managed finances, administrative documentation, and meeting logistics for a student cultural organization, coordinating communication among members to foster engagement and language practice in collaboration with other officers.",
          "Planned and executed joint events with four student organizations by coordinating event logistics, facilitating communication between leadership teams, and managing member outreach across Instagram, LINE, and email.",
        ],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    type: "skills",
    data: {
      Languages: [
        " Java",
        "Python",
        "C",
        "C++",
        "JavaScript",
        "HTML/CSS",
        "SQL",
      ],
      "Cloud & DevOps": [
        " AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      "Operating Systems": [
        " Linux (Ubuntu)",
        "Windows",
      ],
      Tools: [
        " Git",
        "GitHub",
        "MySQL",
        "Slurm",
      ],
    },
  },

  certifications: {
    title: "Certifications",
    type: "certifications",
    data: [
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
  },
};

export default resumeData;