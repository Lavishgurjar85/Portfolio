import React, { Component } from 'react';
import profile from '../image/profile.jpg';

export class Profile extends Component {
  

    render(){
      return(
        <div class="d-flex flex-column">

            <div class="profile ">
                <img src={profile} alt="profile" className='img-fluid-profile rounded-circle'></img>
                <h1 class="text-light">Lavish Gurjar</h1>
            </div>
        </div>
      )
    }
}

export default Profile