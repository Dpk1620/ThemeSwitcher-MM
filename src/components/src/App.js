import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './Pages/Dashboard.jsx';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Page1 from './Pages/Page1';
import About from './Pages/About.jsx';
import Analytics from './Pages/Analytics.jsx';
import Setting from './Pages/Setting';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
import {ThemeColorContext} from './context/ThemeContext';
const App = () => {
  return (
    <BrowserRouter>
    <ThemeColorContext>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/setting"  element={<Setting />} />
        </Routes>
      </Sidebar>
      </ThemeColorContext>
    </BrowserRouter>
  );
};

export default App;