import React, { useState } from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import Spinner from "../components/Spinner";



function Transcribe() {
  const [fileData, setFileData] = useState();
  // const [text, setText] = useState();
  // const [transcriptID, setTranscriptID] = useState();
  const [audioSrc, setAudio] = useState();
  const [utterances, setUtterance] = useState();
  const [loading, setLoading] = useState(false);

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    // console.log("file data ====>", fileData);
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("audio", fileData);
    const server = "https://transcript-server.herokuapp.com";

    // Send request to backend - Single upload
    let response = await fetch(`${server}/transcript`, {
      method: 'POST',
      body: data
    });
    
    const responseData = await response.json();
   
    // setText(responseData.text);
    // setTranscriptID(`${responseData.id}`)
    setAudio(responseData.audio_url)
    setLoading(false);
    
    setUtterance(responseData.utterances);
    // console.log(responseData.utterances);
  };
  console.log(loading);
  return (
    
    <div className="App">
      <h2>Upload your files</h2>
      <div className="d-flex flex-column justify-content-end mb-5">
        <form onSubmit={onSubmitHandler}> 
          <input type="file" onChange={fileChangeHandler} encType="multipart/form-data" className="mb-3 btn-sm border border-secondary rounded p-2" required/>
          <button className="btn btn-primary btn-block w-25" type="submit">{loading ? <span><Spinner type="spin" color="white"/></span>: <span>Transcribe</span>}</button>
        </form>
      </div>
      
      <div>
        <audio src={audioSrc} type="audio" controls/>
        {utterances ? utterances.map(u => <p key={Math.random()*10}><span className="badge badge-secondary"> Speaker {u.speaker}: </span> ({new Date(u.start).toISOString().slice(11, 19)}) {u.text} ({new Date(u.end).toISOString().slice(11, 19)})</p>) : <p></p>}
       
      </div>
      

    </div>
  );
}
export default withAuthenticationRequired(Transcribe, {
  onRedirecting: () => <Loading />,
});