
import './App.scss';

import { Header } from "./Components/NavBar/Header/Header";
import { Footer } from "./Components/NavBar/Footer/Footer";
import { ShoppingList } from './Components/Shop/ShoppingList';

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section>
          <ShoppingList />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>

    </>
  )
}

export default App
