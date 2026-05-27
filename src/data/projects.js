import jbrc1 from "../assets/projectImages/JBRC1.png";
import jbrc2 from "../assets/projectImages/JBRC2.png";
import jbrc3 from "../assets/projectImages/JBRC3.png";
import jbrc4 from "../assets/projectImages/JBRC4.png";
import jbrc5 from "../assets/projectImages/JBRC3.png";
import jbrc6 from "../assets/projectImages/JBRC4.png";
import Flipkart1 from "../assets/projectImages/Flipkart1.png";
import Flipkart2 from "../assets/projectImages/Flipkart2.png";
import Flipkart3 from "../assets/projectImages/Flipkart3.png";
import Flipkart4 from "../assets/projectImages/Flipkart4.png";
import Flipkart5 from "../assets/projectImages/Flipkart1.png";
import Flipkart6 from "../assets/projectImages/Flipkart2.png";
import JioHotstar1 from "../assets/projectImages/JioHotstar1.png";
import JioHotstar2 from "../assets/projectImages/JioHotstar2.png";
import JioHotstar3 from "../assets/projectImages/JioHotstar3.png";
import JioHotstar4 from "../assets/projectImages/JioHotstar4.png";
import JioHotstar5 from "../assets/projectImages/JioHotstar5.png";
import lms1 from "../assets/projectImages/lms1.png";
import lms2 from "../assets/projectImages/lms2.png";
import lms3 from "../assets/projectImages/lms3.png";
export const projects = [
  {
    title: "Flipkart Clone",
    thumbnail: Flipkart1,
    category: "Full Stack",
    desc: "Full-stack e-commerce platform with JWT auth, product search, cart & checkout flow.",
    details:
      "Architected a complete e-commerce platform featuring product listing with search & filter, cart management, and secure checkout. Implemented JWT-based authentication with role-based access, REST APIs following MVC architecture, and optimized PostgreSQL queries for performance.",
    tech: [
      "React",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "Tailwind CSS",
      "Axios",
    ],
    github: "https://github.com/pankaj1892",
    live: "#",
    images: [Flipkart1, Flipkart2, Flipkart3, Flipkart4, Flipkart5, Flipkart6],
  },
  {
    title: "JBRC ERP System",
    thumbnail: jbrc1,
    category: "Full Stack",
    desc: "Enterprise HR management with employee CRUD, payroll processing & role-based access.",
    details:
      "Built at Ashdip IT Solutions — a production HRMS and Logistics with modules for  employee management, payroll processing, and role-based access control. Includes dynamic filtering, pagination, and real-time search on the React frontend, backed by Spring Boot REST APIs and MySQL/PostgreSQL.",
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Hibernate (JPA)",
      "MySQL",
      "JWT",
      "Tailwind CSS",
    ],
    github: "#",
    images: [jbrc1, jbrc2, jbrc3, jbrc4, jbrc5, jbrc6],
    live: "#",
  },
  {
    title: "Book Management System",
    thumbnail: lms1,
    category: "Backend",
    desc: "Web CRUD application for managing books using JSP, Servlets & Hibernate ORM.",
    details:
      "A robust web-based CRUD system to manage book records with full create, read, update, delete functionality. Leveraged Hibernate ORM for efficient database interactions, following the MVC pattern with JSP views and Servlet controllers.",
    tech: ["Java", "JSP", "Servlets", "Hibernate", "MySQL", "HTML", "CSS"],
    github: "#",
    images: [lms1, lms2, lms3],
    live: "#",
  },
  {
    title: "JioHotstar Clone",
    thumbnail: JioHotstar1,
    category: "Frontend",
    desc: "Responsive streaming platform UI with dynamic movie browsing & JSON rendering.",
    details:
      "Crafted a pixel-perfect responsive UI inspired by JioHotstar for browsing and searching movies. Uses dynamic JSON rendering to display content, with category filtering, hero banners, and a clean Bootstrap/React layout.",
    tech: ["React", "JavaScript", "Bootstrap", "JSON", "CSS3"],
    github: "#",
    live: "#",
    images: [JioHotstar1, JioHotstar2, JioHotstar3, JioHotstar4, JioHotstar5],
  },
];
