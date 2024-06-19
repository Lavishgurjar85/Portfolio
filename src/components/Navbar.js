import React, { Component } from 'react';

import Icons from "./Icons";


export class Navbar extends Component {
  

  render(){
    return(

       <div class="social-container">
             <nav id="navbar" class="nav-menu navbar">
                   <ul >
                      <Icons/>
                   </ul>
             </nav>        
       </div>
        

        )
      }
    }
        
    export default Navbar
