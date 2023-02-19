import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import Info from "./Components/Info/Info";


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Hero/>
      <Cards/>
      <Info/>
    </div>
  );
}

export default App;
