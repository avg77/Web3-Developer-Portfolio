import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  express,
  ethers,
  github,
  ipfs,
  solidity,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  blockseblock,
  plgenesis,
  carrent,
  jobit,
  tripguide,
  nft,
  staking,
  votifi,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "hackathons",
    title: "Hackathons",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/*const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];*/ 

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Ethers JS",
    icon: ethers,
  },
  {
    name: "IPFS",
    icon: ipfs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Blockchain Developer Intern",
    company_name: "BlockseBlock | Remote",
    icon: blockseblock,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    link: "https://github.com/avg77/Bitcoin-Backed-Loan-Platform",
    demo: "https://bitcoin-backed-loan-platform.vercel.app/",
    points: [
      "Collaborated and developed 'BTCollat', a Bitcoin-backed loan dApp in a team of 3 using Rust and React, simulating live DeFi interactions with 2 token standards and 4 smart canisters.",
      "Designed and deployed ICRC-1 compliant token canisters (ckBTC & iUSD) with 3+ core methods including 'mint', 'transfer', and 'balance_of'.",
      "Integrated wallet-based authentication using DFINITY's AuthClient, enabling secure on-chain user verification for 100% of interactions.",
      "Engineered backend logic for loan lifecycle management (deposit, borrow, repay) using persistent data structures and dynamic Rust memory handling.",
    ],
  },
];

const hackathons = [
  {
    title: "PL_Genesis: Modular Worlds Hackathon",
    company_name: "Protocol Labs",
    icon: plgenesis,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    link: "https://github.com/avg77/Decentralized_Voting_DApp",
    submission: "https://devspot.app/en/projects/221",
    demo: "https://decentralized-voting-dapp-drab.vercel.app/",
    points: [
      "Developed 'VotiFi', a token-gated voting platform using Solidity and React for the Track: Decentralized Economies, Governance & Science.",
      "Integrated IPFS + Filecoin (via Pinata & Lighthouse) for voter/candidate image storage.",
      "Implemented fallback gateway logic to ensure resilience in image retrieval.",
      "Configured robust Express.js backend with secure file handling and JWT authentication.",
      "Enabled wallet-based authentication (MetaMask) for voter and candidate onboarding."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VotiFi - Voting DApp",
    description:
      "VotiFi is a decentralized application that enables secure, transparent, and user-friendly online voting through blockchain technology.",
    demo: "https://voting-dapp-ten-navy.vercel.app/",

    tags: [
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],

    image: votifi,
    source_code_link: "https://github.com/avg77/Voting-DApp",
  },
  {
    name: "Staking DApp",
    description:
      "A decentralized staking app where users stake ERC20 tokens to earn reward tokens over time based on the amount and duration of their stake.",
      demo: "https://staking-dapp-two-ashen.vercel.app/",
    tags: [
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "green-text-gradient",
      },
    ],
    image: staking,
    source_code_link: "https://github.com/avg77/Staking-DApp",
  },
  {
    name: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace that allows users to mint, buy, and sell digital assets securely using blockchain technology.",
      demo: "https://nft-marketplace-olive-beta.vercel.app/",
    tags: [
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/avg77/NFT-Marketplace",
  },
];

export { technologies, experiences, hackathons, testimonials, projects };
