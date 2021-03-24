import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Create from './components/Create/Create';

function App() {
 


  return (
    <BrowserRouter>
    <div className="grid-container">
      
      <header className="row">
        <div>
          <Link id= 'link' to='/task1' className="brand">Products Lists</Link>
        </div>
      
        <div className = "info">
          <Link id= 'link' to='/register' className="container"> Register </Link>
        </div>
      </header>
      <main>
      <Route path="/create/:id" component = {Create}  />
      <Route path="/product/:id" component = {Product} />
  
      <Route path="/task1" exact= {true} component = {Home} />
  
      <Route path="/register" component = {Register} />
    
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
