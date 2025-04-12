import "../styles/About.css";

const About = () => {
  return (
    <div>
      <section id='AboutSection'>
      <div id='AboutCol'>

        <div id="AboutMain">
        <h1>About Me</h1>
        <p>I am a <strong>front-end developer</strong> skilled in <strong>React</strong>, <strong>Redux</strong>, and <strong>JavaScript</strong>, with expertise in <strong>UI design</strong>, creating <strong>Figma wireframes</strong>, and building responsive layouts. I efficiently fetch APIs using <strong>Axios</strong> and manage state with Redux. I also have experience <strong>updating live servers with Ubuntu Linux using PuTTY</strong>, ensuring smooth deployment. I am passionate about <strong>writing clean code</strong> and staying updated with the latest front-end technologies.</p>


      </div>
        

        <div id='Qualification'>
            <h2>Qualification</h2>
            <div id="SubCol">
            <h4>MBA - HR and Marketing</h4>
            <p>GPA - 7.2</p>
          <p>Solamalai College of Engineering (2021 - 2023)</p>
          </div>
            <div id="SubCol">
            <h4>B.SC - Information Technology</h4>
            <p>GPA - 6.4</p>
          <p>The American College (2018 - 2021)</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;