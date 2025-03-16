// import "../styles/Contactsection.css";
// import { useState, useEffect } from "react";
// import Git from '../images/Git.jpeg'
// import Linkedin from '../images/Linkedin.jpeg'


import "../styles/Contactsection.css";
import { useState } from "react";
import Git from '../images/Git.jpeg';
import Linkedin from '../images/Linkedin.jpeg';

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="Contactsection">
      <h1>Contact</h1>
      <div id="contactMain">
        <div id="contactContainer">
        <div id="Address" className="contact-card">
          <h2>Address:</h2>
          <p>42, Nehru street, Jaihindpuram,<br/>Madurai-11.</p>
        </div>
        <div id="Phoneno" className="contact-card">
          <h2>Phone No:</h2>
          <p className="contact_link"> <a href="tell:918825500260"> +91 8825500260</a></p>
        </div>
        <div id="Email" className="contact-card">
          <h2>E-mail:</h2>
          <p className="contact_link"> <a href="mailto:mmadhankumar519@gmail.com"> mmadhankumar519@gmail.com </a> </p>
          
        </div>
        </div>
        <div id="contactLogo">
          <img
            src={Git}
            alt="GitHub"
            onClick={()=>{window.open("https://github.com/Madhanm2001/", "_blank")}}
            className={hovered === "Git" ? "hovered" : ""}
            onMouseEnter={() => setHovered("Git")}
            onMouseLeave={() => setHovered(null)}
          />
          <img
            src={Linkedin}
            alt="LinkedIn"
            onClick={()=>{window.open("https://www.linkedin.com/in/m-madhankumar-ba794b24a/", "_blank")}}
            className={hovered === "Linkedin" ? "hovered" : ""}
            onMouseEnter={() => setHovered("Linkedin")}
            onMouseLeave={() => setHovered(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
