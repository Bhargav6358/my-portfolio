import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="main">
      <div className="about-me-container">
      <section className="about-sec-pad"></section>
      <div className="text1">
        <p>ABOUT ME</p>
      </div>
      <section className="heading-sec">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </section>
      <section className="know-me">
        <div className="get-to-know-me">
          <h3 className="title">Get to know me!</h3>
          <div className="details">
            <p className="content-pera">
              Hello,  I am a third-year <strong
              >B.Tech CSE</strong> student <strong>(Application
              Developer)</strong> , doing a bachelor's from UTU, Bardoli .
            </p>
            <p className="content-pera">
              ⚡I have experience in Application development with proficiency
              in technologies like <strong>Flutter and Firebase</strong> and building large-scale
              applications with responsive user interfaces.
            </p>
            <p className="content-pera">
              ⚡Recently expanding skillset into other technologies like <strong>native
              Android and IOS with Nodejs, API, and MongoDB </strong> for enhanced
              development capabilities.
            </p>
            <p className="content-pera">
              ⚡I thrive on 🛠️ crafting real-world projects, constantly learning
              and applying new skills. My passion lies in tackling 🚀 challenges
              and turning them into opportunities for innovative solutions
              through hands-on problem-solving.
            </p>
            <p className="content-pera">
              ⚡I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                
            </p>
          </div>
        </div>
        <div className="skills-content">
          <h3 className="title">
            My Skills
          </h3>
          <div className="skills ">
            <div className="skill-skills">Flutter</div>
            <div className="skill-skills">Dart</div>
            <div className="skill-skills">Firebase</div>
            <div className="skill-skills">Figma</div>
            <div className="skill-skills">FlutterFlow</div>
            <div className="skill-skills">REST APIs</div>
            <div className="skill-skills">JSON</div>
            <div className="skill-skills">HTML</div>
            <div className="skill-skills">CSS</div>
            <div className="skill-skills">Python</div>
            <div className="skill-skills">Communication</div>
            <div className="skill-skills">Leadership</div>
            
          </div>
        </div>
      </section>

      <button className="resume-button">Contact</button>
    </div>
    </div>
    
  );
};

export default AboutUs;
