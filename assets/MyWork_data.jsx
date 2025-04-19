import dummy_img from "./logo.png";

import b_img1 from "./BrainBite/b_image1.png";
import b_img2 from "./BrainBite/b_image2.png";
import b_img3 from "./BrainBite/b_image3.png";
import b_img4 from "./BrainBite/b_image4.png";
import b_img5 from "./BrainBite/b_image5.png";
import b_img6 from "./BrainBite/b_image6.png";
import b_img7 from "./BrainBite/b_image7.png";
import b_img8 from "./BrainBite/b_image8.png";
import b_img9 from "./BrainBite/b_image9.png";
import b_img10 from "./BrainBite/b_image10.png";
import b_img11 from "./BrainBite/b_image11.png";
import b_img12 from "./BrainBite/b_image12.png";

import l_img1 from "./LausGrocery/l_image1.png";
import l_img2 from "./LausGrocery/l_image2.png";
import l_img3 from "./LausGrocery/l_image3.png";
import l_img4 from "./LausGrocery/l_image4.png";
import l_img5 from "./LausGrocery/l_image5.png";
import l_img6 from "./LausGrocery/l_image6.png";
import l_img7 from "./LausGrocery/l_image7.png";
import l_img8 from "./LausGrocery/l_image8.png";
import l_img9 from "./LausGrocery/l_image9.png";

import m_img1 from "./MovieRamp/m_image1.png";
import m_img2 from "./MovieRamp/m_image2.png";
import m_img3 from "./MovieRamp/m_image3.png";
import m_img4 from "./MovieRamp/m_image4.png";

import p_img1 from "./PokemonGraphQL/p_image1.png";
import p_img2 from "./PokemonGraphQL/p_image2.png";
import p_img3 from "./PokemonGraphQL/p_image3.png";

import t_img1 from "./ToDoList/t_image1.png";
import t_img2 from "./ToDoList/t_image2.png";

import lb_img1 from "./lib_bank/lb_image1.png";
import lb_img2 from "./lib_bank/lb_image2.png";
import lb_img3 from "./lib_bank/lb_image3.png";
import lb_img4 from "./lib_bank/lb_image4.png";
import lb_img5 from "./lib_bank/lb_image5.png";
import lb_img6 from "./lib_bank/lb_image6.png";
import lb_img7 from "./lib_bank/lb_image7.png";
import lb_img8 from "./lib_bank/lb_image8.png";
import lb_img9 from "./lib_bank/lb_image9.png";
import lb_img10 from "./lib_bank/lb_image10.png";
import lb_img11 from "./lib_bank/lb_image11.png";
import lb_img12 from "./lib_bank/lb_image12.png";
import lb_img13 from "./lib_bank/lb_image13.png";

import b_logo from "./project_logos/BrainBite.png";
import m_logo from "./project_logos/MovieRamp.png";

const projects_data = [
  {
    p_no: 1,
    p_logo: b_logo,
    p_title: "BrainBite | 2024",
    p_abt: "Quiz Website, used by our Department",
    p_img: [
      b_img1, b_img2, b_img3, b_img4, b_img5, b_img6, b_img7, b_img8, b_img9, b_img10, b_img11, b_img12
    ],
    p_link: "https://github.com/SURIYALAKSHMI29/Quiz",
    desc: [
      "Developed as part of an in-house internship and now actively used by our department.",
      "Collaborated with a friend to build a full-stack quiz platform from scratch.",
      "Features question randomization and supports both MCQs and fill-in-the-blank formats.",
      "Equipped with fullscreen monitoring to reduce cheating during quizzes.",
      "Ensures quiz integrity with only one active quiz at a time.",
      "Allows students to review answers after submission, enhancing learning outcomes."
    ],
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    p_no: 2,
    p_title: "PokeGraphQL PlayGround | 2025",
    p_abt: "GraphQL hands-on project using Pokémon data",
    p_img: [
      p_img1, p_img2, p_img3
    ],
    p_link: "https://github.com/SURIYALAKSHMI29/PokeGraphQL-Playground",
    desc: [
      "Interactive GraphQL playground with Pokémon data.",
      "Hands-on learning of queries and mutations.",
      "Focused on structure, syntax, and real-time results."
    ],
    tech_stack: ["GraphQL", "Node.js"]
  },
  {
    p_no: 3,
    p_title: "MovieRamp | 2025",
    p_logo: m_logo,
    p_abt: "Movie Search Engine",
    p_img: [m_img1, m_img2, m_img3, m_img4],
    p_link: "https://github.com/SURIYALAKSHMI29/MovieRamp",
    h_link: "https://movieramp.onrender.com/",
    desc: [
      "Search for movies, top-rated films, and recent watches.",
      "Integrated TMDB API for fetching detailed movie info.",
      "Stored search data in Appwrite to identify trending movies."
    ],
    tech_stack: ["React", "Appwrite", "TMDB API"]
  },
  {
    p_no: 4,
    p_title: "Laus Fresh Mart | 2024",
    p_abt: "Grocery Store Management System",
    p_img: [
      l_img1,l_img2,l_img3,l_img4,l_img5,l_img6,l_img7,l_img8,l_img9
    ],
    p_link: "https://github.com/SURIYALAKSHMI29/Grocery-Store-Management-System",
    desc: [
      "Manages inventory, employees, and billing process.",
      "Secure authentication and role management for data protection.",
      "Organized item listings, real-time stock tracking, and smooth checkout."
    ],
    tech_stack: [ "HTML", "CSS", "JavaScript","Java (JSP)", "MySQL"]
  },
  {
    p_no: 5,
    p_title: "To-Do-List | 2024",
    p_abt: "A simple to-do list that remembers the finished tasks too",
    p_img: [
      t_img1,t_img2
    ],
    p_link: "https://github.com/your-username/project-1",
    h_link: "https://todolist-2r7t.onrender.com/",  
    desc: [
      "Create, manage, and prioritize tasks.",
      "Save completed tasks for later reference.",
      "Simple, user-friendly design."
    ],
    tech_stack: ["React",  "CSS"]
  },
  {
    p_no: 6,
    p_title: "Library & Bank Management Systems | 2023",
    p_abt: "Built to explore CRUD operations and UI interactions.",
    p_img: [
      lb_img1, lb_img2, lb_img3, lb_img4, lb_img5, lb_img6, lb_img7, lb_img8, lb_img9, lb_img10, lb_img11, lb_img12, lb_img13
    ],
    p_link: "https://github.com/SURIYALAKSHMI29/Coding-Raja-Technologies-Internship",
    desc: [
      "Features include login, record management, and secure data handling.",
      "Focused on backend operations and user interface workflows."
    ],
    tech_stack: ["Java (Jframe)", "MySQL"]
  },
];

export default projects_data;
