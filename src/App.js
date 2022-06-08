import logo from './logo.svg';
import './App.css';
import SlideNav from './template/SlideNav';
import Header from './template/Header';
import Home from './template/Home';
import Footer from './template/Footer';
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>

  
  );
}

export default App;
