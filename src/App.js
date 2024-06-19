
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar.js'

import Profile from './components/profile.js'
import SocialFollow from "./SocialFollow.js"
import React from "react";
import Home from './components/Home.js'
import About from './components/About.js'





function App() {
  return (
    <div className="root">
      <body className="mobile-nav-active">
       

        
        
          <header id="header">
            
                <Profile/>
                <SocialFollow/>
                <Navbar/>
                
                
        </header>  
        <Home/>
        <About/>
        
          
                  
        

      
    </body>
    </div>
  );
}

export default App;
