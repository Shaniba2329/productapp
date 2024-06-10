import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproduct from './components/Addproduct';
import Searchproduct from './components/Searchproduct';
import Deleteproduct from './components/Deleteproduct';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addproduct/>}/>
      <Route path='/search' element={<Searchproduct/>}/>
      <Route path='/delete' element={<Deleteproduct/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
