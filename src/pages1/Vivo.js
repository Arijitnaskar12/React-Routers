import React from 'react';
import Products from '../Components/Products';

const ProductsData=[
    {
        id:1,
        name:"Vivo Book",
        description:"Vivo Book",
        img:"https://sathya.in/media/89277/catalog/Vivo%20Mobile%20Y21G%204GB%20RAM%2064GB_01.jpg",
        price:"$450"
    },
    {
        id:2,
        name:"vivo 15 Pro",
        description:"Vivo 15 Pro",
        img:"https://5.imimg.com/data5/SELLER/Default/2022/5/KG/EH/ER/140629936/vivo-v23-5g-mobile.jpg",
        price:"$1000"
    },
    {
        id:3,
        name:"Vivo Pad",
        description:"Vivo Pad",
        img:"https://fdn2.mobgsm.com/vv/pics/vivo/vivo-pad-1.jpg",
        price:"$100"
    }
]
function Vivo() {
  return (
    <div className='flexDiv'>
          {
        ProductsData.map((curr)=>
        (
            <Products name={curr.name} image={curr.img} des={curr.des} price={curr.price}/>
        ))
    }
    </div>
  )
}

export default Vivo