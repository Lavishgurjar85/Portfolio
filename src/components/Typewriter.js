import React, { useState, useEffect} from 'react';
import Typewriter from "typewriter-effect";



export default function TextAnimation(props){
    const text1=props.Text1
    const text2=props.Text2
    const text3=props.Text3
    const text4=props.Text4

      return(
        <>
           <Typewriter  options={{
           strings: ['Hello', 'World!'],
           autoStart: true,
           loop: true,
          }}
  
  onInit={(typewriter)=> {
  
  typewriter
   .typeString("I am ")
  .typeString(text1)
    
  .pauseFor(1000)
  .deleteChars(13)
  
  .typeString(text2)
  .pauseFor(1000)
  .deleteChars(14)
  .typeString(text3)
  .pauseFor(1000)
  .deleteChars(9)
  .typeString(text4)
  .pauseFor(1000)
  .deleteChars(6)
  .start();
  }}
  />
        </>
      )
}