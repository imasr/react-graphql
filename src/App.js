import React from 'react';
import './App.scss';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
export default class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Header appName="React App"
          currentUser="Ashish" />
        <div className="main-container">
          <Login />
        </div>
      </BrowserRouter>
    )
  }
}
