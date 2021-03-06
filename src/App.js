import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from"./screens/HomePage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import DebitPage from "./screens/DebitPage";
import ExpensePage from "./screens/ExpensePage";
 
import { BrowserRouter, Link, Route } from "react-router-dom";
import CreditPage from "./screens/CreditPage";
import Menu from "./components/Menu";
import {FaWindowClose } from 'react-icons/fa';
import { toggleSidebar } from './helpers/popups';
import { FixHeader } from "./components/FixHeader";
import DepositPage from "./screens/DepositPage";



toast.configure();
// FixHeader();

function App(props) {

  const handleLogout = () => {
    localStorage.clear('userInfo');
    document.location.href= "/homepage";
  }
  return (
    <BrowserRouter>
        <div className="wrapper">
              <header class="header bg-primary">
                    <ul className="logo">                
                      <Link to="/" className="menu">iManage</Link>                   
                    </ul>                             
                      <Menu />                                 
              </header>
              <main>
                
                <Route path="/" component={HomePage} exact="true"/>
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/debits" component={DebitPage} />
                <Route path="/credits" component={CreditPage} />
                <Route path="/expenses" component={ExpensePage} />
                <Route path="/income" component={DepositPage} />
              </main>    
              <aside className="sidebar">                  
                  <FaWindowClose onClick={toggleSidebar} size={32}/>  
                  <ul className="menu-item">
                    <li className="menu" onClick={handleLogout}> logout</li>
                  </ul>                
              </aside>          
              
              <footer className="bg-primary">
                  Developed By <a href="janvierdev.netlify.app"> 	&#169; Janvier</a>
              </footer>
          </div>     
            
            
              
    </BrowserRouter>   
  );
}

export default App;
