import React from "react";
import logo from '../assets/logo/logo.png'


const Hero = () => (
  <div className="text-center hero p-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="85" />
    <h1 className="mb-4">Transcribe</h1>
    <p className="lead">
      A blazing fast ⚡️⚡️ voice to text conversion application.
      Upload your audio and we'll take care of the rest.
    </p>
  </div>
);

export default Hero;
