import Menu from "./components/accueil/menu";
import ShoppingList from './components/boutique/boutique';

import { useState, useEffect } from "react";
import "./App.scss";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <div>
            <ShoppingList />
        </div>
      </header>
    </div>
  );
}

export default App;
