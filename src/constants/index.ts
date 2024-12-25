import { accenture, att } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  devtinder,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
} from "../assets/icons/index.ts";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#accbe1",
    date: "October 2020 - June 2023",
    points: [
      "Developed the front-end of the web application based on product backlog stories and design comps.",
      "Integrated business logic with the front end, including API connections and analytics events.",
      "Planned and estimated user stories, providing time reports for management and billing.",
      "Organized and guided development teams, ensuring adherence to best practices and team protocols.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AT&T",
    icon: att,
    iconBg: "#a2d2ff",
    date: "June 2023 - Present",
    points: [
      "Led the migration of a legacy application to Next.js, improving UI/UX and performance.",
      "Collaborated with backend developers for smooth API integrations and data flow.",
      "Worked with the Product Owner to translate business requirements into technical solutions.",
      "Optimized performance through server-side rendering, boosting load speed by 40% and SEO",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/srinivasan-r23",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/srinivasan-r-rangarajan",
  },
];

export const projects = [
  {
    iconUrl: devtinder,
    theme: "btn-back-red",
    name: "Dev Tiner - MERN",
    description:
      "Developed a MERN stack app called DevTinder, allowing users to create profiles, update their skills, and find matches based on their expertise.",
    link: "https://github.com/srinivasan-r23/DevTinder",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Netfix - GPT",
    description:
      "Created a Netflix clone using React.js, featuring GPT-4 integration for personalized movie suggestions.",
    link: "https://github.com/srinivasan-r23/netflixgpt",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Fitness App",
    description:
      "Built a fitness app using Next.js to calculate BMI, recommend daily calorie intake, and track food entries.",
    link: "https://github.com/srinivasan-r23/fitness",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Expense Tracker",
    description:
      "Built a basic expense tracker app using React Native to manage and track personal expenses.",
    link: "https://github.com/srinivasan-r23/React-Native-Basic-Expense",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Deliveroo Clone",
    description:
      "Built a Deliveroo-inspired food ordering app using React Native, allowing users to browse restaurants, place orders, and track deliveries.",
    link: "https://github.com/srinivasan-r23/React-Native-Deliveroo-Clone",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Pursuit Jobs",
    description:
      "Built a basic job portal app using Next.js, where employers can list job openings and job seekers can browse and apply.",
    link: "https://github.com/srinivasan-r23/pursuitjobs",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Amazon Clone",
    description:
      "Built an eCommerce Amazon shopping site clone using Next.js, featuring product listings, a shopping cart, and checkout functionality.",
    link: "https://github.com/srinivasan-r23/amazon-clone-nextjs",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "WhatsApp - MERN",
    description:
      "Built a WhatsApp clone using the MERN stack, featuring real-time messaging and user authentication.",
    link: "https://github.com/srinivasan-r23/Mern-Whatsapp/tree/whatsapp-mern-fe",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "WhatsApp, Netflix, Tinder, Hotstar Clone",
    description:
      "Built clones of WhatsApp, Netflix, Tinder, and Hotstar using React and Firebase, featuring core functionalities like messaging, streaming, and user authentication.",
    link: "https://github.com/srinivasan-r23/ReactJS-NextJS_Clone_Builds",
  },
];
