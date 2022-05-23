
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
