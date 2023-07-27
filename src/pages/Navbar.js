import React from 'react';
import { Link,NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
        
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
    </div>
  )
}

export default Navbar;