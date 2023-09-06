
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';
import Analytics from './pages/Analytics';
import Products from './pages/Products'






function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/About' exact element={<About/>}></Route>
        <Route path='/Analytics' exact element={<Analytics/>}></Route>
        <Route path='/Products' exact element={<Products/>}></Route>
        <Route path='/Setting' exact element={<Setting/>}></Route>
      </Routes>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
