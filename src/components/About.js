import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './skills'
// import { Dimensions } from 'react-native'

export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }, []);
    const about=`Welcome to my profile! I'm Lavish Gurjar, a dedicated and passionate student currently pursuing B.Tech in Information Technology at Dr B R Ambedkar National Institute of technology, Jalandhar. I am currently in my fouth year of study, and I am proud to maintain a CGPA of 8.74.

    With a focus on front-end development. On the technical side, my proficiency in ReactJS allows me to create visually appealing and user-friendly interfaces that leave a lasting impact. I am committed to staying up-to-date with the latest industry trends and best practices, continuously expanding my skill set to deliver cutting-edge solutions.
    
    Thank you for visiting my profile, and feel free to explore my portfolio and get in touch for collaboration opportunities.`
    
    


return(
    <>
        <section id='about' className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2 >About</h2>
                </div>
                
                
                    <img  src="https://tripur3121.github.io/Tripur/assets/img/giphy.webp" className='img-fluid ' data-aos='fade-right'></img>
                
                    <div class="about-text">

                    <p class="fst-italic " data-aos='fade-left'>
                       {about}
                    </p>
                    </div>
                    
             <Skills/> 
                
                </div>
            
        </section>
    
    </>
)

}