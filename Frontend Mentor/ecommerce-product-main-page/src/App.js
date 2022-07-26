import "./styles/general.css"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="main">
        <Product/>
      </div>
    </div>
  );
}

export default App;
