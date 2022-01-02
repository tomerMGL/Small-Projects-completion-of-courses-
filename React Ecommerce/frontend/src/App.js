import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">

    <header className="row">
        <div>
            <a className="header_login" href="/cart">עגלת הקניות</a>
            <a className="header_login" href="/signin">התחברות</a>
        </div>
        <div >
            <a className="header_brand" href="/">TagNet Digital</a>
        </div>

        
    </header>


    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>

    </main>


    <footer className="row center">כל הזכויות שמורות לטאגנט דיגיטל  {new Date().getFullYear()}&copy; </footer>

</div>
</BrowserRouter>
  );
}

export default App;
