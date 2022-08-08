import React from "react";
import loadingImg from "../assets/images/Loading.svg"

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;