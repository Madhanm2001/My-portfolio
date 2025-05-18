import "../styles/Project.css";
import React,{ useState, useEffect } from "react";

// const projectData = [
//   {
//     name: "Project Name 1",
//     role: "Backend Developer",
//     description: "Developed a RESTful API for a task management system using Node.js and Express.",
//     technologies: ["Node.js", "Express.js", "MySQL"],
//     responsibilities: [
//       "Developed and optimized database schemas.",
//       "Implemented user authentication and role-based access.",
//       "Integrated third-party APIs for enhanced functionality.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
// ];

// const Project = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {projectData.map((project, index) => (
//           <div className="carousel-item" key={index}>
//             <h2>{project.name}</h2>
//             <p className="project-role">Role: {project.role}</p>
//             <p className="project-description">{project.description}</p>
//             <div className="tech-used">
//               <h3>Technologies Used:</h3>
//               <ul>
//                 {project.technologies.map((tech, idx) => (
//                   <li key={idx}>{tech}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="responsibilities">
//               <h3>Responsibilities:</h3>
//               <ul>
//                 {project.responsibilities.map((resp, idx) => (
//                   <li key={idx}>{resp}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-control prev" onClick={handlePrev}>
//         &lt;
//       </button>
//       <button className="carousel-control next" onClick={handleNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };


const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectData = [
   
    {
      name: "Free Technical Webinar Feature",
      role: "React Developer",
      description: "Tech Webinar Management System for Monitoring Candidate Sessions on Zoom in our product.",
      technologies: ['HTML','CSS','Javascript',"Bootstrap","React", "Redux"],
      responsibilities: [
        "UI Design: Developing intuitive, user-friendly interfaces for monitoring Zoom candidate sessions.",
        "Zoom API Integration: Implementing Zoom API to fetch and display real-time session data.",
        "Responsive Layouts: Ensuring the system works seamlessly across all devices and screen sizes.",
        "Real-Time Monitoring: Building features for live monitoring of candidate sessions and status updates."
      ],
    },
    {
      name: "Task Ticket Rising Feature",
      role: "React Developer",
      description: "Task Management with Ticket Raising, Email Notifications, and Employee Data Management.",
      technologies: ['HTML','CSS', 'Javascript',"Bootstrap","React", "Redux"],
      responsibilities: [
        "UI Design: Creating user-friendly interfaces for managing tasks, ticket raising, and employee data.",
        "Ticket Management: Implementing dynamic ticket creation, viewing, and updating features.",
        "Email Notifications: Designing email notification triggers for task updates and ticket status changes.",
        "Responsive Layout: Ensuring the platform is optimized for all devices, providing a seamless user experience."
      ],
    },
    //  {
    //   name: "Expense Tracker App",
    //   role: "Frontend developer",
    //   description: "A simple and intuitive web application that helps users manage their daily expenses. Users can add, view, and categorize transactions to keep track of their spending habits. It provides a clear summary of income, expenses, and balance in real-time. Ideal for personal budgeting and financial awareness.",
    //   technologies: ['HTML','CSS','Javascript',"React(Functional Component)"],
    //   responsibilities: [
    //     "Engineered a responsive expense tracker app using React with tabs for Home, Profile, Reports and Transaction History.",
    //     "Implemented JWT-based authentication with separate Login and Signup pages for secure, user-specific access.",
    //     "Tracked and displayed income, expenses, and balance with real-time updates on every transaction.",
    //     "Integrated category and date filters along with visual reports to help users analyze their financial habits.",
    //   ],
    // },
    {
      name: "User Management System",
      role: "MERN Stack developer",
      description: "User Management System is a MERN stack app for creating, viewing, editing, and deleting user profiles with name, email, and age. It features a responsive React frontend and a secure Node.js/Express backend with MongoDB.",
      technologies: ['HTML','CSS', "React", "Bootstrap", "Node", 'Express','Mongo DB', 'Mongoose'],
      responsibilities: [
        "Engineered a full-stack User Management System using the MERN stack with Mongoose for schema modeling.",
        "Implemented CRUD operations for user data including name, email and age, with real-time frontend and backend sync",
        "Structured the backend using the Model-Controller-Route (MCR) pattern to ensure scalable and maintainable architecture.",
      ],
    },
    
  ];

  function getWindowDimensions() {
    return window.innerWidth
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
console.log("size ",  windowDimensions)

  const nextSlide = () => {
    const windowWidth = getWindowDimensions();
    if ( windowWidth > 750) {
      console.log("rotation", windowDimensions)
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && windowDimensions > 750) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };


  // useEffect(() => {
  //   const interval = setInterval(nextSlide,1500);
  //   return () => clearInterval(interval);
  // }, []);
  
  return (
    <div className="container" >
      <div className="wrapper">
        <h2 className="header">Featured Projects</h2>
        {windowDimensions > 750 && <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>}
        <div className="carousel">
          {projectData.map((project, index) => {
            let cardClass = "card";
            if (index === currentIndex) {
              cardClass += " activeCard";
            } else if (index === (currentIndex - 1 + projectData.length) % projectData.length) {
              cardClass += " prevCard";
            } else if (index === (currentIndex + 1) % projectData.length) {
              cardClass += " nextCard";
            }

            return (
              <div key={index} className={cardClass}>
                <h3 className="projectName">{project.name}</h3>
                <p className=" role">{project.role}</p>
                <p className="description">{project.description}</p>
                <div className="techContainer">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="responsibilities">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="responsibility">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        { windowDimensions > 750 && <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>}
        { windowDimensions > 750 && <div className="dots">
          {projectData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "activeDot" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Project;



// swiper

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const Project = () => {
//   const projectData = [
//     {
//       name: "Project Name 1",
//       role: "Backend Developer",
//       description: "Developed a RESTful API for a task management system using Node.js and Express.",
//       technologies: ["Node.js", "Express.js", "MySQL"],
//       responsibilities: [
//         "Developed and optimized database schemas.",
//         "Implemented user authentication and role-based access.",
//         "Integrated third-party APIs for enhanced functionality.",
//       ],
//     },
//     {
//       name: "Project Name 1",
//       role: "Backend Developer",
//       description: "Developed a RESTful API for a task management system using Node.js and Express.",
//       technologies: ["Node.js", "Express.js", "MySQL"],
//       responsibilities: [
//         "Developed and optimized database schemas.",
//         "Implemented user authentication and role-based access.",
//         "Integrated third-party APIs for enhanced functionality.",
//       ],
//     },
//     {
//       name: "Project Name 2",
//       role: "Full Stack Developer",
//       description: "E-commerce platform with real-time inventory management.",
//       technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
//       responsibilities: [
//         "Built responsive front-end interface",
//         "Implemented real-time inventory tracking",
//         "Developed secure payment integration",
//       ],
//     },
//     {
//       name: "Project Name 3",
//       role: "Frontend Developer",
//       description: "Interactive dashboard for data visualization",
//       technologies: ["React", "D3.js", "Tailwind CSS"],
//       responsibilities: [
//         "Created interactive data visualizations",
//         "Implemented responsive design",
//         "Optimized performance for large datasets",
//       ],
//     },
//   ];

//   return (
//     <div style={{ width: "80%", padding: "2rem", margin: "0 auto", background: "#1F2937", color: "white" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Featured Projects</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={50} // Spacing between slides
//         slidesPerView={2} // Number of slides visible at a time
//         navigation // Enable navigation arrows
//         pagination={{ clickable: true }} // Enable pagination dots
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
//         breakpoints={{
//           // Customize behavior for different screen sizes
//           1200: { slidesPerView: 2 },
//           1000: { slidesPerView: 2 },
//           600: { slidesPerView: 1 },
//         }}
//       >
//         {projectData.map((project, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 background: "#374151",
//                 padding: "1.5rem",
//                 borderRadius: "1rem",
//                 boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               <h3 style={{ color: "#60A5FA" }}>{project.name}</h3>
//               <p>{project.role}</p>
//               <p>{project.description}</p>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
//                 {project.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       background: "#60A5FA",
//                       color: "#1F2937",
//                       padding: "0.5rem 1rem",
//                       borderRadius: "0.5rem",
//                       width: "100%",
//                       height: "100%"
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );

// };

// export default Project;
