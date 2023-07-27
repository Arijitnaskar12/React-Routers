import React from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
function Brand() {
  let navigate=useNavigate();
  return (
    <div>
    <h1>Products</h1>
    <h3>Our Top Brands</h3>
    <button onClick={()=>navigate("/brand/apple")}>Apple</button>
    <button onClick={()=>navigate("Realme")}>Realme</button>
    <button onClick={()=>navigate("/brand/Vivo")}>Vivo</button>
    <button onClick={()=>navigate("/brand/Oppo")}>Oppo</button>
    <Outlet/>
    </div>
  )
}

export default Brand;