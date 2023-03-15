import './App.css';
import React, {useState} from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import termsandconditions from './pages/TermsAndConditions';
import privacyandpolicy from './pages/PrivacyAndPolicy';
import Sidebar from './components/Sidebar/Sidebar';
import FAQ from './pages/FAQ'
import Popper from './components/Popper';
// import { useState } from 'react';
function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <React.Fragment>
      {/* <Popper/> */}
      <Navbar toggle={toggle}/>
      <Sidebar isopen={isopen} toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/about" component={AboutUs} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/termsandconditions" component={termsandconditions} />
        <Route path="/privacyandpolicy" component={privacyandpolicy} />
        <Route path="/faqs" component={FAQ} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
