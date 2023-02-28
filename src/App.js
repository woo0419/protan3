import {Header, Footer} from './Common';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Counter from './pages/Counter';
import Input from './pages/Input';
import List from './pages/List';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/list" element={<List />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* footer component */}
      <Footer />
    </div>
  );
}

export default App;
