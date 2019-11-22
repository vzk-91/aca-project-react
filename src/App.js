import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './components/Home/Home';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import LoginContainer from './components/Login/LoginContainer';
import WorkSpaceContainer from './components/WorkSpace/WorkSpaceContainer'
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header />
     <Route  path='/home'  render={()=> <Home/>}/>
     <Route  path='/registration'  render={()=> <RegistrationContainer/>} />
     <Route path='/login' render={()=><LoginContainer/>}/>
     <Route  path='/workspace'  render={()=> <WorkSpaceContainer/>} />
     <Route  path='/home'  render={()=> <Footer/>}/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
