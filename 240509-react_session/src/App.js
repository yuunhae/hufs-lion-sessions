import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Regisgter from './Pages/Regisgter';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* element = 내가 보여줄 컴포넌트작성, path랑 컴포넌트 이름이랑 소문자로 맞추는 편 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Regisgter />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
