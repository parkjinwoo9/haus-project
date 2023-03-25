import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './component/common/Header';
import Home from './component/common/Home';
import ShoppingBasket from './component/router/ShoppingBasket';
import Search from './component/router/Search';
import Privacy from './component/router/Privcy';
import Map from './component/router/Map';
import Shop from './component/router/Shop';
import Detail from './component/detail/Detail';
import {useState} from 'react';



function App() {


  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/shoppingbasket' element={<ShoppingBasket/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route exact={true} path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
