import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Navigation from './components/navigation/Navigation';
import ProductPages from './pages/ProductPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productName" element={<ProductPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
