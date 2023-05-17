
import './App.css';
import Header from './components/Header';
import Footer from './components/Header';
import Home from './components/Header';
import About from './components/Header';
import Product from './components/Header';
import Contact from './components/Header';
import {Redirect,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route to ="/" component ={Home}/>
      <Route to ="/products" component ={Product}/>
      <Route to ="/about" component ={About}/>
      <Route to ="/contact" component ={Contact}/>
      <Redirect to="/" />
    </Switch>
    <Footer/>
    </>
    
  );
}

export default App;
