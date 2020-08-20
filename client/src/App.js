import React from 'react';

import './App.css';
//import { clear } from 'console';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Register from './components/User/Register';
import Login from './components/User/Login';
import Home from "./components/Navbar/Home" ;
import Buyer from "./components/Buyer/Buyer";
import Seller from "./components/Seller/Seller";
import Upload from "./components/Navbar/Upload"
import {Provider} from "react-redux";
import { store } from './Redux/store';
import Alert from "./components/Navbar/Alert"


function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <Router>
      <NavBar/>
      <div className="container">
      <Alert/>
      </div>
     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Seller" component={Seller}/>
        <Route exact path="/Buyer" component={Buyer}/>
        <Route exact path="/Upload" component={Upload}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        

      </Switch>

      </Router>





      </Provider>

    
      
     
      
     
    </div>
  );
}

export default App;
