import React from "react";

const HomeContent = () => (
  <div className="next-steps px-1">
    <h2 className="my-5 text-center">How does this work?</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3 text-primary">
          Upload your audio
        </h6>
        <p>
          Head to the "transcribe" page, upload your audio file (preferably mp3) and forget the rest.
          Seriously, it's that simple.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3 text-primary">
          Login via 3rd party
        </h6>
        <p>
          Add an extra layer of security by logging in the app using your Google credentials.
          We use <a target="_blank" rel="noreferrer" href="https://auth0.com">Auth0</a> for our authentication, which makes 
          accessing the app like butter.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3 text-primary">
          Speaker Detection
        </h6>
        <p>
          Transcribe will detect the speaker change in the audio and automatically switch to the next line making it easier to keep track of speakers.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3 text-primary">
         Ad Free / No Spam
        </h6>
        <p>
          We run on the support of users like you. We will never sell ads or spam you with email (exceptions apply 🤪)
        </p>
      </div>
    </div>
  </div>
);

export default HomeContent;
