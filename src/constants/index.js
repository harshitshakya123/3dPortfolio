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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hash,
  bitbucket,
  arena,
  eazyer,
  fyrii,
  tweaks,
  prompt,
  redirect,
  user,
  zenarate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
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
];

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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "HashStudioz Technologies",
    icon: hash,
    iconBg: "#383E56",
    date: "Feb 2021 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Zenarate",
    icon: zenarate,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Till Now",
    points: [
      "Spearheading the development and upkeep of dynamic web applications leveraging React.js and associated technologies.",
      "Fostering synergy within diverse teams, including designers, product managers, and fellow developers, to deliver top-tier products.",
      "Enforcing responsive design principles and verifying seamless performance across various browsers for optimal user experience.",
      "Actively engaging in code reviews, offering insightful critiques, and nurturing a collaborative development environment.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  // title: "Full stack Developer",
  // company_name: "Meta",
  // icon: meta,
  // iconBg: "#E6DEDD",
  // date: "Jan 2023 - Present",
  // points: [
  //   "Developing and maintaining web applications using React.js and other related technologies.",
  //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   "Implementing responsive design and ensuring cross-browser compatibility.",
  //   "Participating in code reviews and providing constructive feedback to other developers.",
  // ],
  // },
];

const testimonials = [
  // {
  //   testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like harshit does.",
    name: "Roger",
    designation: "CEO",
    company: "Eazyer",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: user,
  },
  // {
  //   testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Arena",
    description:
      "Web-based platform that allows users to manage their meetings, Task, Deliverables, and more through a simple and intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "web-socket",
        color: "pink-text-gradient",
      },
    ],
    image: arena,
    source_code_link: "https://www.position2.com/",
  },
  {
    name: "Fyrii",
    description:
      "Fyrii is Developer Experience Platform that enables organizations to build, manage, co-create and co-sell with their developer community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: fyrii,
    source_code_link: "https://app.dev.fyrii.ai/",
  },
  {
    name: "Eazyer",
    description:
      "Eazyer.com connects users with exclusive deals and reviews, making saving money easier and supporting local businesses with a focus on community growth.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eazyer,
    source_code_link: "https://dev.eazyer.com/",
  },
  {
    name: "PromptCraft",
    description:
      "PromptCraft is an open-source AI prompting tool for modern world to discover, create and share creative prompts. It allows user to search interactive snippet.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: prompt,
    source_code_link: "https://prompt-liart-six.vercel.app/",
  },
  {
    name: "Tweaks",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tweaks,
    source_code_link: "https://staging.tweaks.com.au/",
  },
];

export { services, technologies, experiences, testimonials, projects };
