import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './app/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* parent route */}
        <Route path="/" element={<Layout />}>
        {/* child routes */}
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
