import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

var FontAwesome = require('react-fontawesome');

export default function App() {
  return (
    <div>
      <div>
        <h1>Hello my name is Alexander Barcenas. </h1>
        <h3>I have studied at UCSD for three years and plan on finishing my studies June 2018.</h3>
        <h3>I'm currently rebulding my website using React, but you can check out my resume and profiles below.</h3>
      </div>
      <div>
        <a href="AlexanderBarcenasResume.pdf">Resume</a>
        <div>
          <a href="https://github.com/AKBarcenas">
            <FontAwesome name="github" size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/alexander-barcenas-792196107">
            <FontAwesome name="linkedin-square" size="2x"/>
          </a>
          <a href="https://www.hackerrank.com/Alexbrc">
            <FontAwesome name="code" size="2x"/>
          </a>
        </div>
      </div>
    </div>
  );
}
