import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./progressBar";
import dispensary from "../image/dispensary.png";
import ticket from "../image/ticket.png";
import travel from "../image/travel.png";
import room from "../image/room.png";
export default function Skills() {
  const skill1 = "HTML";
  const skill2 = "CSS";
  const skill3 = "JS";
  const skill4 = "REACT";
  const skill5 = "Nodejs";
  const skill6 = "Mongodb";
  const skill7 = "Machine_Learning"
  const progressValueHTML = 70;
  const progressValueCSS = 60;
  const progressValueJS = 40;
  const progressValueREACT = 40;
  const progressValueNodejs = 55;
  const progressValueMongodb = 40;
  const progressValueMachine_Learning=60;
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  

  return (
    <>
      <hr />
      <div className="container">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Skills</h2>
        </div>

        <div  data-aos="fade-up">
          <ProgressBar value={progressValueHTML} skillName={skill1}  />
          <ProgressBar value={progressValueCSS} skillName={skill2} />
          <ProgressBar skillName={skill3} value={progressValueJS}></ProgressBar>
          <ProgressBar value={progressValueREACT} skillName={skill4} />
          <ProgressBar value={progressValueNodejs} skillName={skill5} />
          <ProgressBar value={progressValueMongodb} skillName={skill6} />
          <ProgressBar value={progressValueMachine_Learning} skillName={skill7} />
        </div>
      </div>
      <hr />
      <div className="container" id="project">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Projects</h2>
        </div>

        <div class="projects">
          <div className="project"data-aos='zoom-in'>
            <img src={dispensary} className="project-img" />
            <h2 className="project-name">Dispensary website</h2>
            <p className="project-details">
            This website is designed for a dispensary, offering various features such as report uploading, appointment scheduling, and prescription generation. 
            It helps to make the dispensary's services available online.
            </p>

            <div className="button">
              <a className="link"href="https://github.com/Lavishgurjar85/College-Dispensary" target="_blank">
                View Project
              </a>
            </div>
          </div>

            <div className="project" data-aos='zoom-in' data-aos-delay="500">
            <img src={room} className="project-img" />
            <h2 className="project-name">Rent The Room</h2>
            <p className="project-details">
              Description: This project allows the user to view rooms around there surrounding for renting.
              They can search the rooms by address or there budget.
            </p>

            <div className="button" >
              <a className="link"href="https://rentmyroom-3h7k.onrender.com/" target="_blank">
                View Project
              </a>
            </div>
          </div>
  
          <div className="project" data-aos='zoom-in' data-aos-delay="1000">
            <img src={ticket} className="project-img" />
            <h2 className="project-name">Tickets Available</h2>
            <p className="project-details">
              Description: In this project we have utilized the API's to fetch the details of train including its route and availability of the tickets.
              It basically provides the details of the availability of the tickets from in between station from boarding to destination station.
            </p>

            <div className="button" >
              <a className="link"href="https://github.com/Lavishgurjar85/Train-Ticket-Availability" target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project" data-aos='zoom-in' data-aos-delay="1500">
            <img src={travel} className="project-img" />
            <h2 className="project-name">Travel management system</h2>
            <p className="project-details">
              Description: This project is built in Java.
              It is basically a prototype which helps the user to book the hotel reservation
              and there travelling details.
            </p>
            <div className="button">
              <a className="link" href="https://github.com/Lavishgurjar85/Travel-Management-System" target="_blank">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="resume">
  <div className="section-title">
    <h2>Resume</h2>
  </div>
  <div className="resume">
    <a
      href={`${process.env.PUBLIC_URL}/lavishresume.pdf`}
      target="_blank"
      className="animated-button1"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Resume
    </a>
  </div>
</div>

    </>
  );
}
