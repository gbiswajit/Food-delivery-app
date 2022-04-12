import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './screens/Home';

import Cart from './screens/Cart';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />} exact></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
