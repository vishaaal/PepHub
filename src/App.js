import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import Info from "./Components/Info/Info";
import Footer from "./Components/Footer/Footer";
import Home from "./Home";
import Blog from "./pages/blogs/Blogs"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/blogs" exact>
          <Blog/>
        </Route>
      
      {/* <Blog/> */}
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
