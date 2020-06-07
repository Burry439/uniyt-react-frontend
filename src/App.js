import React from 'react';
import SinglePlayerGame from "./components/SinglePlayerGame/singlePlayerGame"
import MultiPlayerGame from "./components/MultiPlayerGame/multiPlayerGame"
import Profile from './components/Profile/profile';
import { ToastProvider } from 'react-toast-notifications'
import Home from "./components/Home/home"
import Navbar from "./components/Navbar/navbar"
import GameContextProvider from './contexts/gameContext';
import UserContextProvider from './contexts/userContext';
import ModalContextProvider from './contexts/modalContext';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import CModal from './components/Modal/Modal';
import config from "./config"
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin/admin';
import AdminContextProvider from './contexts/adminContext';

function App() {
  console.log(config)
  return (
    <Router>
      <div className="App">
      <ToastProvider autoDismissTimeout={3000}>
        <ModalContextProvider>
          <AdminContextProvider>
        <UserContextProvider>
        <GameContextProvider>
          <Navbar/> 
          <CModal/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/mulitPlayerGame" exact  component={MultiPlayerGame}/>   
              <Route path="/singlePlayerGame"  component={SinglePlayerGame}/>  
              <Route path="/profile"  exact component={Profile}/>    
              <Route path="/admin"  exact component={Admin}/>   
              <Route component={Home}/>  
            </Switch>
             
        </GameContextProvider>
        </UserContextProvider>
        </AdminContextProvider>
        </ModalContextProvider>
        </ToastProvider>
      </div>
    </Router>
  );
}

export default App;
