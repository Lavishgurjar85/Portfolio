import React, {useState } from 'react';
import ReactDom from 'react-dom/client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross} from '@fortawesome/free-solid-svg-icons'


     

     


export default function Toggle() {
  
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleMode=()=>{
     if(window.innerWidth> 1199){
      setSidebarOpen(true);
     }
     
     if(sidebarOpen===false ){
                
                
                 setSidebarOpen(true);
                 
                  document.getElementById("header").style.left="0px ";
                 
                }
    else {
                  
                  setSidebarOpen(false);
                   document.getElementById("header").style.left="-300px ";
                  
                }
        
  }
    
    
  
  
  return(
    <div className="mobile-nav-toggle"  id="togglebutton">
          <FontAwesomeIcon onClick={toggleMode} className="toggle" 
           icon={faBars}
           style={{color:"#fff"}} size="1x" />
    </div>
  )

}
  
    
  
    
  
       
        


