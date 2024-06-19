import React from 'react';

import Typewriter from './Typewriter.js';

import Toggle from './toggle.js'
//import HomePhoto from '../image/home.jpg'







export default function Home() {
   


    const text1="Web Developer"
    const text2="Problem-Solver" 
    const text3="Motivated"
    const text4="Reader"
    
    
    
    return(
        
        <section id="home"className="d-flex flex-column justify-content-center
             allign-items-center">
             
                
                <Toggle/>
                 <div className="home animated fadeIn">
                         <h1 ><strong>Lavish Gurjar</strong></h1>
                         <h5>
                           <strong> <Typewriter class="typewriter" Text1={text1} Text2={text2} Text3={text3} Text4={text4}></Typewriter>  </strong>
                         </h5>

                </div> 
                 </section>
        
        
        
        
        )
    }

