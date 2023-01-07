import './App.css';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import Wish from './Pages/Wish';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductScreen from './Pages/ProductScreen';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product/:slug' element={<ProductScreen />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/wish' element={<Wish />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
