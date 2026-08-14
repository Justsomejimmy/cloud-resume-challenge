const placeholder = "https://placehold.co/360x220"

const ProjectsData = [
    {
        name: 'Fragrance Vault',
        handle: 'fragrance-vault',
        thumbnail: placeholder,
        description: "Developing a native desktop application for organizing, rating, and analyzing a personal fragrance collection. The application supports collection management, multi-user ratings, searchable fragrance notes, seasonal recommendationns, and local data storage.",
        technologies: [
            "Rust",
            "Slint",
            "SQLite",
            "Cargo",
            "Git"
        ]
    },
    {
        name: 'Server Health Dashboard',
        handle: 'server-health-dashboard',
        thumbnail: placeholder,
        description: "Developed a full-stack server health monitoring dashboard that displays real-time CPU, memory, disk, and service metrics through an interactive web interface. Implemented backend APIs and data visualization to demonstrate system monitoring, troubleshooting, and full-stack development skills.",
        technologies: [
            "React",
            "FastAPI",
            "Docker",
            "AWS"
        ],
        github: "https://github.com/Justsomejimmy/server-health-dashboard"
    },
    {
        name: 'Gym Space Monitoring System',
        handle: 'gym-space-monitoring-system',
        thumbnail: placeholder,
        description: "Developed a gym space monitoring system in Python as part of a 4-person team to simulate and manage real-time occupancy, member activity, and equipment usage. Collaborated on the software development lifecycle by producing a Requirements Definition Document, Software Requirements Specification, and Software Architecture Document while implementing network communication and backend system components.",
        technologies: [
            "Python",
            "MySQL",
            "Docker",
            "TCP Sockets",
            "Multithreading"
        ],
        github: "https://github.com/Justsomejimmy/Gym-Space-Monitoring-System"
    },
    {
        name: 'Parking Management System',
        handle: 'parking-management-system',
        thumbnail: placeholder,
        description: "Developed a Java-based parking management system as part of a 4-person team, automating vehicle tracking, parking allocation, and occupancy management using object-oriented design principles. Collaborated on software engineering documentation throughout the project lifecycle, including Software Requirements Specification, Software Architecture Document, and other design artifacts.",
        technologies: [
            "Object-Oriented Programming",
            "Java",
            "JavaFX"
        ],
        github: "https://github.com/Justsomejimmy/Parking-Management-System"
    },
    {
        name: 'Haskell Calendar',
        handle: 'haskell-calendar',
        thumbnail: placeholder,
        description: "Developed a calendar application in Haskell that generates and displays formatted monthly calendars using functional programming principles. Applied recursion, pattern matching, and immutable data structures to implement date calculations and calendar generation logic.",
        technologies: [
            "Haskell",
            "Functional Programming",
            "Recursion",
            "Pattern Matching"
        ],
        github: "https://github.com/Justsomejimmy/Haskell-Calendar"
    }
]

export default ProjectsData;