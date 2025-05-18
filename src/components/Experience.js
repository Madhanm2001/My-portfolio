import "../styles/Experience.css";

const Experience = () => {
  return (
    <div>
      <section id="ExpSection">
        <div id="ExpCol">
          <h1>Experience</h1>
          <div className="expContainer">
            <h2>Junior React Developer</h2>
            <h3>Gigame Infotech Solution</h3>
            <h4>Apr 2024 - Mar 2025</h4>
            <div id="ExpMainContent">

              <div>
                <h3>Role </h3>
                <p>
                  <ul>
                    <li>Created wireframes and translated them into fully responsive, pixel-perfect web interfaces using React.js
                      (Class Component), HTML and CSS</li>
                    <li>Integrated RESTful APIs using Axios and managed complex client-side state with Redux</li>
                    <li>Developed and maintained reusable UI components to streamline front-end development and improve
                      performance</li>
                    <li>Used SVN for version control and collaborated with team members on code updates and releases.
                    </li>
                    <li>Deployed and maintained builds on both live and test servers using PuTTY in a Linux environment.
                    </li>
                    <li>Contributed to the end-to-end development of a Learning platform, ensuring seamless client-side
                      functionality and user experience.</li>

                  </ul></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
