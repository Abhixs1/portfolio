import {
  mysql,
  postgresql,
  python,
  kafka,
  java,
  springboot,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  docker,
  carrent,
  oracle,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "API & Microservices",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Apache Kafka",
    icon: kafka,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Nov 2025",
    points: [
      "Engineered real-time event streaming system using Java and Apache Kafka processing 60,000+ claims monthly, reducing processing delays by 40%.",
      "Developed automated data extraction modules in Java to export OCI cloud product data to Excel, reducing manual report generation time by 95%.",
      "Built intelligent JSON-to-Excel converter in Python using automated schema detection, processing 1000+ product configurations.",
      "Optimized RESTful API services reducing response times by 20% and SQL execution time by 40%.",
      "Managed CI/CD pipelines reducing deployment downtime by 30% while ensuring zero-disruption releases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had worked with Abhishek for one of the very demanding projects. He has always been a great team player and very hardworking individual. He gives attention to detail and is enthusiastic to learn new things. He would be a great asset to the team. I wish him all the success for his future endeavours!!",
    name: "Shoma S Dixith",
    designation: "Principal Consultant",
    company: "Oracle",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://www.linkedin.com/in/shoma-s-dixith-14675a16/",
  },
  {
    testimonial:
      "Abhishek is a highly professional, collaborative, and results-oriented engineer. They have my highest recommendation and would be a tremendous asset to any organization looking to enhance its development capabilities.",
    name: "Ankan Ghosh",
    designation: "Technical Consultant",
    company: "Oracle (OHI)",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://www.linkedin.com/in/ankan-ghosh-00430715a/",
  },
  {
    testimonial:
      "I had the pleasure of working with Abhishek on project work within the Oracle Health Insurance domain, where he consistently demonstrated strong commitment and a positive learning attitude. He would be a valuable addition to any team, and I wish him continued success in his career.",
    name: "Robin Anant",
    designation: "Principal Consultant",
    company: "Oracle",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "https://www.linkedin.com/in/robin-anant-a333a6101/",
  },
  {
    testimonial:
      "I'd the pleasure of working with Abhishek at Oracle, and I've always been impressed by his professionalism and strong technical skills. His ability to quickly understand business needs and translate them into effective solutions really stands out.",
    name: "Lavyashree K",
    designation: "OHI Technical Consultant & Developer",
    company: "Oracle Health India",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    linkedin: "https://www.linkedin.com/in/lavyashree-k-b2668b1b5/",
  },
];

const projects = [
  {
    name: "Phishing URL Detection",
    description:
      "Machine learning system using Random Forest achieving 96% accuracy in detecting phishing URLs.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "random-forest", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhishekbit2002",
  },
];

export { services, technologies, experiences, testimonials, projects };