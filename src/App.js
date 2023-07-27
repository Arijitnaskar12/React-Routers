import React from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// // import Contact from './pages/Contact';
// import Blog from './pages/Blog';
import{Routes,Route} from 'react-router-dom';
import './style.css';
import Navbar from './pages/Navbar';
import Brand from './pages1/Brand';
import Apple from './pages1/Apple';
import Realme from './pages1/Realme';
import Oppo from './pages1/Oppo';
import Vivo from './pages1/Vivo';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    {/* <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<Blog/>}/> */}
    <Route path='/brand' element={<Brand/>}>
          <Route path='apple' element={<Apple/>}/>
          <Route path='realme' element={<Realme/>}/>
          <Route path='vivo' element={<Vivo/>}/>
          <Route path='oppo' element={<Oppo/>}/> 
    </Route>
    </Routes>
    </div>
  )
}

export default App;