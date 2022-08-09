import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Transcribe from "./pages/Transcribe";
import Footer from './components/Footer'

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar/>
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/transcribe" component={Transcribe} />
          </Switch>
        </div>
      </div>
      
    </div>
  );
};

export default App;