import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style/general.css";
import "./style/app.css";

function App() {
  return (
    <div className="app">
      <Navbar balance="921.48" imageSource="logo.svg" />
      <Main totalThisMonth="478.33" fromLastMonth="+2.4"/>
    </div>
  );
}

export default App;
