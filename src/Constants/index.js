import {
  FaUsers,
  FaCode,
  FaCogs,
  FaClipboardList,
  FaBug,
  FaComments,
} from "react-icons/fa";

import Nk from "../assets/Nk.jpg";
import Nk1 from "../assets/Nk.png";
import cwh from "../assets/cwh.jpg";
import Hk from "../assets/Hk.jpg";
import Sachin from "../assets/Sachin.jpg";
import naukesh from "../assets/naukesh.jpg";

export const navItems = [
  { label: "Home", href: "#Hero" },
  { label: "Features", href: "#Features" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
];

// src/Constants/index.js

export const testimonials = [
  {
    name: "Nitesh Kumar",
    role: "Frontend Developer",
    testimonial:
      "CodeCraft has completely transformed the way I work on my projects. The real-time collaboration feature is a game-changer!",
    image: Nk,
  },
  {
    name: "Rahul Kumar",
    role: "Backend Developer",
    testimonial:
      "With CodeCraft's customizable workspaces, I can set up my environment exactly how I like it. It's boosted my productivity significantly.",
    image: Nk1,
  },
  {
    name: "Sachin Kumar",
    role: "Full Stack Developer",
    testimonial:
      "The intuitive code editor and integrated debugging tools have made my development process so much smoother. Highly recommend CodeCraft!",
    image: Sachin,
  },
  {
    name: "Naukesh kumar",
    role: "DevOps Engineer",
    testimonial:
      "Deploying projects directly from CodeCraft is incredibly convenient. It’s streamlined our workflow and improved team efficiency.",
    image: naukesh,
  },

  {
    name: "Hitesh Sir",
    role: "Software Engineer",
    testimonial:
      "The project templates have saved me so much time when starting new projects. CodeCraft is an essential tool for any developer.",
    image: Hk,
  },
  {
    name: "Harry",
    role: "UX/UI Designer",
    testimonial:
      "I love the seamless integration of design and code in CodeCraft. It’s made collaboration with developers so much easier.",
    image: cwh,
  },
];

export const features = [
  {
    icon: FaUsers,
    text: "Real-Time Collaboration",
    description:
      "Work together with peers in real-time, making coding projects more efficient.",
  },
  {
    icon: FaCode,
    text: "Intuitive Code Editor",
    description:
      "Write and edit code effortlessly with a powerful, user-friendly editor.",
  },
  {
    icon: FaCogs,
    text: "Customizable Workspaces",
    description:
      "Personalize your environment to fit your workflow and enhance productivity.",
  },
  {
    icon: FaBug,
    text: "Integrated Debugging Tools",
    description:
      "Quickly identify and fix issues with advanced debugging tools built into the platform.",
  },
  {
    icon: FaClipboardList,
    text: "Project Templates",
    description:
      "Start new projects easily with a variety of pre-built templates tailored to different needs.",
  },
  {
    icon: FaComments,
    text: "Community Support",
    description:
      "Connect with a vibrant community for advice, feedback, and collaboration opportunities.",
  },
];
export const workflowSteps = [
  {
    title: "Set Up Your Workspace",
    description:
      "Customize your coding environment to fit your needs. Personalize your settings and preferences for an optimal workflow.",
  },
  {
    title: "Write and Test Code",
    description:
      "Use our intuitive code editor to write your code. Test and debug your projects with integrated tools designed to streamline your development process.",
  },
  {
    title: "Collaborate in Real-Time",
    description:
      "Invite team members to collaborate on your projects. Work together in real-time and leverage the power of collective coding.",
  },
  {
    title: "Deploy and Share",
    description:
      "Deploy your projects directly from CodeCraft. Share your work with the community and get feedback to improve and grow.",
  },
];

export const PricingPlans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to basic features",
      "1 project",
      "Community support",
      "Limited customization options",
    ],
  },
  {
    title: "Pro",
    price: "$9.99",
    features: [
      "Access to all features",
      "Unlimited projects",

      "Real-time collaboration",
      "Integrated debugging tools",
    ],
  },
  {
    title: "Enterprise",
    price: "$300",
    features: [
      "Custom solutions for your business",
      "Dedicated account manager",
      "Advanced security features",
      "Team collaboration tools",
    ],
  },
];
// src/Constants/index.js

export const footerContent = [
  {
    heading: "Company",
    items: [
      { text: "About Us", link: "#" },
      { text: "Careers", link: "#" },
      { text: "Blog", link: "#" },
      { text: "Contact Us", link: "#" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { text: "Documentation", link: "#" },
      { text: "Tutorials", link: "#" },
      { text: "Community", link: "#" },
      { text: "Support", link: "#" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { text: "Privacy Policy", link: "#" },
      { text: "Terms of Service", link: "#" },
      { text: "Cookie Policy", link: "#" },
      { text: "Security", link: "#" },
    ],
  },
];
