import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const ProgressBar = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
    const value=props.value;
    const skill=props.skillName;
  return (
    <>
    <div className='skills' data-aos='fade-up'>
                    
                           <h6 class="progress-element">{skill}</h6>
                           <h6  class="progress-value">{value}%</h6>
                    
                   <div className="progressBar">
                  <div className="progress " data-aos="fade-right" data-aos-duration="1000"style={{ width: `${value}%` }}></div>
                  </div>
    </div>
    </>
  );
};

export default ProgressBar;
