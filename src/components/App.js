import React from 'react';
import s from '../styles/app.style';

var FontAwesome = require('react-fontawesome');

export default function App() {
  return (
    <div style={s.App}>
      <div style={s.Appheader}>
        <h2>Alexander Barcenas</h2>
        <h3>I am a third year at UCSD and plan on finishing my B. S. in computer science in June 2018.</h3>
        <h3>I am currently rebulding my website using React, but you can check out my resume and profiles below.</h3>
      </div>
      <div style={s.Links}>
        <a href="AlexanderBarcenasResume.pdf" style={s.button}>Resume</a>
        <div>
          <a href="https://github.com/AKBarcenas">
            <FontAwesome name="github" size="2x" style={s.Icons}/>
          </a>
          <a href="https://www.linkedin.com/in/alexander-barcenas-792196107">
            <FontAwesome name="linkedin-square" size="2x" style={s.Icons}/>
          </a>
          <a href="https://www.hackerrank.com/Alexbrc">
            <FontAwesome name="code" size="2x" style={s.Icons}/>
          </a>
        </div>
      </div>
    </div>
  );
}
