//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1_nike.png';
import Project2 from './assets/img/projects/p2_shiv_cloth.png';
import Project3 from './assets/img/projects/p3_textutils.png';
import Project4 from './assets/img/projects/p3_todo_list.png';
import Project5 from './assets/img/projects/p5_stopwatch.png';
import Project6 from './assets/img/projects/p6_flipkart_clone.png';
import Project7 from './assets/img/projects/p7_portfolio.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/pngwing.com.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
// import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/profile.php?id=100074720104219",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/rohitt.tarang/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/RohitTarangR",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/rohit-tarang-55153b242/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "https://www.freelancer.in/u/tarangrohit515",
  },
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~0175be1edbdead8e66",
  },
  {
    img: FiverBrandIcon,
    href: "https://www.fiverr.com/rohit_tarang?up_rollout=true",
  },
  {
    img: BehanceBrandIcon,
    href: "https://www.behance.net/tarangrohit1",
  },
  {
    img: DribbbleBrandIcon,
    href: "https://dribbble.com/rohittarang515?onboarding=true&designer=true",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Nike Clone Web-App",
    category: "Web development",
  },
  {
    id: "2",
    image: Project2,
    name: "Shiv Cloth Web-app",
    category: "Web development",
  },
  {
    id: "3",
    image: Project3,
    name: "TextUtils Web-App",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "To-Do-List Web-App",
    category: "UI/UX design",
  },
  {
    id: "5",
    image: Project5,
    name: "Stopwatch Web-App",
    category: "UI/UX design",
  },
  {
    id: "6",
    image: Project6,
    name: "Flipkart Clone Web-App",
    category: "Web development",
  },
  {
    id: "7",
    image: Project7,
    name: "PErsonal Portfolio Website",
    category: "Web development",
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "As a web designer, I combine creativity with technical expertise to transform concepts into stunning, user-friendly interfaces.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Web development is the art and science of creating dynamic and interactive websites and web applications that serve various purposes and cater to diverse audiences.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Branding is more than just a logo or a tagline; it's the essence of your business identity. ",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Search Engine Optimization (SEO) is the process of enhancing a website's visibility and ranking on search engine results pages (SERPs) to drive organic, targeted traffic.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at rohittarang512005@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Gota, Ahmedabad - 382881',
    description: 'Serving clients worldwide',
  },
];
