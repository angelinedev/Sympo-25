export const techEventsData = [
  {
    id: 101,
    name: "Starlight Techfest",
    description:
      "n all-night Coding Extravaganza featuring diverse challenges in DSA, fostering teamwork and endurance. Participants colLab, DCSEorate across different CS domains, tackling various tracks in this tech marathon.",
    image: "https://picsum.photos/500/350",
  },
  {
    id: 2,
    name: "Novice Techfest",
    description:
      "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills. Geared towards coding novices, it explores hurdles in reasoning, arithmetic, and programming, evaluating participants' ability to build primitive algorithms and tackle mathematical calculations.",
    image: "https://picsum.photos/500/350",
  },
];

export const techEventDetails = [
  

  {
    id: 101,
    image:"https://c0.wallpaperflare.com/preview/997/717/184/artificial-intelligence-codes-developing-screen.jpg",
    name: "Sports and Analytics Event",
    description:
      "Dive into the event of sports and analytics. This event tests the participant's cricket and analytical knowledge with various challenges on Visualization Using Power BI and Tableau. The event consists of two rounds: Online and Offline.",
    teamSize: 3,
    prizes: {
      "1st Prize": "₹1000",
      "2nd Prize": "₹750",
      "3rd Prize": "₹500",
    },
    rounds: [
      {
        roundName: "ROUND 1: ONLINE QUALIFIER",
        platform: "Quizizz",
        format:
          "MCQ questions covering both Cricket and Data Analytics & Visualization",
        selection:
          "The top 8 teams will advance to the second round conducted in the Offline mode",
      },
      {
        roundName: "ROUND 2: OFFLINE CHALLENGE",
        platform: "Power BI/Tableau",
        requirements: [
          "Each team must bring their own laptop and ethernet cable",
          "Participants must have basic knowledge of either Power BI or Tableau",
        ],
        tasks: [
          "Each team will be allocated an IPL Team",
          "Each team can retain a maximum of 2 players",
          "Teams will bid for players in the auction",
          "Visualize the team with the player's statistics using Power BI/Tableau",
        ],
        dataset: "The dataset about the player's statistics will be provided",
        judgementCriteria:
          "Final judgement will be based on both team selection and creation of dashboard in the visualization tool",
      },
    ],
    location: "BETA HALL",
    dateAndTime: "28th August",
    contactInfo: {
      "Varun Umasankar": "+91 9342469216",
      Akash: "+91 9080271047",
    },
    note: "The team that completes the most tasks correctly in the shortest amount of time will be crowned as champions. Any kind of trolling, offending, or misbehaving seen by participants will not be tolerated.",
    eligibility:
      "Individuals who are enrolled in an Undergraduate Degree program are eligible to participate.",
    additionalInfo:
      "Other details and queries will be discussed in the WhatsApp group. Judge's decision will be final.",
  },
];
