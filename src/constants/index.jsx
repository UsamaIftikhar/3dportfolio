import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  linkedin,
  portfolio,
  dribble,
  behance,
  reactjs,
  redux,
  tailwind,
  git,
  wordpress,
  bootstrap,
  netlify,
  figma,
  avm,
  threejs,
  analytics,
  dashboard,
  Provid,
  hoobank,
  github,
  portfoliosample,
  vuejs,
  nestjs,
  nextjs,
  tensorflow,
  python,
  cqr,
  rentalcar,
  evercare,
  otobucks,
  prosku,
  shareverse,
  daniel,
  mr_sean,
  ithrow,
  natasha,
  jonas,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
  {
    name: "Nest JS",
    icon: nestjs,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Evercare",
    icon: avm,
    iconBg: "#383E56",
    date: "2022 -  Present",
    points: [
      "Over 3 years of experience as a senior MEVN stack developer, showcasing expertise in Vue.js and Node.js.",
      "Instrumental in the development of a cutting-edge doctor's app, contributing to its architecture, design, and functionality.",
      "Demonstrated proficiency in Vue.js, bringing a dynamic and engaging user interface to the forefront of the doctor's web and mobile app, enhancing user experience.",
      "Played a pivotal role in Node.js development, ensuring the backend of the doctor's app operated seamlessly, providing robust and reliable functionality.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Technove",
    icon: avm,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Developing and maintaining Ecommerce Site for an Australian Comapny",
      "The business model was similar to airbnb",
      "Made all components reuseable in nextjs",
      "Design Maintainence and hosting maintenance.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Fiverr",
    icon: avm,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Developing and maintaining Wordpress Site for many international companies",
      "Developing custom plugins",
      "Adding payment gateways",
      "Analyzing feedbacks and fixing bugs.",
      "Search Engine Optimization.",
      "Design Maintainence and hosting maintenance.",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "Fiverr",
    icon: avm,
    iconBg: "#E6DEDD",
    date: "2019 - Present",
    points: [
      "Proficient in developing robust and scalable Shopify stores.",
      "Specialized in customizing Shopify stores for unique business needs, including theme development and app integration.",
      "Prioritizing user-friendly interfaces and optimized customer journeys for enhanced shopping experiences."
    ],
  },
];

const testimonials = [
  {
    key: 1,
    testimonial:
      "Great job! I highly recommend for webdesign and development job that you have. I've worked with him numerous times. He never disappoints.",
    name: "Daniel Steven",
    image: daniel,
    country: 'United States',
    link: "https://www.behance.net/omthecreator"
  },
  {
    key: 2,
    testimonial:
      "It was my pleasure to work with such a professional web developer who knows how to work with a non technical person. Loved the end results.",
    name: "Esther",
    image: mr_sean,
    country: 'South Africa',
    link: "https://www.linkedin.com/in/om-patel-401068143/"
  },
  {
    key: 3,
    testimonial:
      "He is a very good communicator and makes sure that he is giving you the best website and product to make your money worth it. Highly recommend.",
    name: "Jacknaan",
    image: jonas,
    country: 'United States',
    link: "https://dribbble.com/om2121"
  },
  {
    key: 4,
    testimonial: "He is amazing communication was excellent i will continue to business with him. He is very talented and works hard for his clients to meet their satisfaction.",
    name: "Natacha",
    image: natasha,
    country: 'United States',
    link: "https://omthecreator.netlify.app/",
  },
  {
    key: 5,
    testimonial: "Great communication and flexibility! He was always quick to respond, super polite, and able to provide advice and be flexible to my changing ideas.",
    name: "Itrowbridge",
    image: ithrow,
    country: 'United States',
    link: "https://github.com/omunite215",
  }
];

const projects = [
  {
    name: "CQR Wallet",
    description: "A true Stablekoinonia with global transparent accountancy built on inflation-resistant precious metals. Redefine your private equity as a function of cash flow!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "block chain",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: cqr,
    netlify_link: "https://staging.cqrvault.org/",
  },
  {
    name: "Luxury Car Rental",
    description:
      "Rotana star luxury car rental Dubai is fairly and competitive price service. Choose your car from our fleet of luxury vehicles including Ferrari, BMW, Audi & more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: rentalcar,
    netlify_link: "https://www.rotanastar.ae/",
  },
  {
    name: "Evercare",
    description:
      "This web application provides a platform to patients or guardians with an ability to search and appoint caregivers. Caregivers can signup and build their profile.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: evercare,
    source_code_link: "https://github.com/omunite215/hoobank",
    netlify_link: "https://www.yourevercare.com/",
  },
  {
    name: "OTO Bucks",
    description:
      "The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of artificial intelligence (AI) have revolutionized the way we drive and maintain our cars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      }
    ],
    image: otobucks,
    source_code_link: "https://github.com/omunite215/Provid-A-YouTube-Clone",
    netlify_link: "https://otobucks.com/",
  },
  {
    name: "Prosku",
    description:
      "A cloud based system to deliver accuracy, efficiency and discipline in the physical stock environment that handles businesses across the 3PL Logistics, Distribution, Wholesale, Manufacturing and Retail sectors",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "ruby on rails",
        color: "pink-text-gradient",
      },
    ],
    image: prosku,
    source_code_link: "https://github.com/omunite215/Analytics-Web-App",
    netlify_link: "https://www.prosku.com/",
  },
  {
    name: "Shareverse",
    description:
      "A product for Australlia through which people can rent and get things on rent based on their needs. Allowing users to use the potential of something which is not currently in use.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: shareverse,
    source_code_link: "https://github.com/omunite215/portfolio",
    netlify_link: "https://shareverse.com.au/",
  },
];

export { services, technologies, experiences, testimonials, projects };