
import './App.css';

import { Header } from "./Components/NavBar/Header/Header";
import { Footer } from "./Components/NavBar/Footer/Footer";

import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section id="detail">
          <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>

    </>
  )
}

export default App
