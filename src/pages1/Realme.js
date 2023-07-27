import React from 'react';
import Products from '../Components/Products';
const ProductsData=[
    {
        id:1,
        name:"Realme Book",
        description:"Realme Book",
        img:"https://fdn.gsmarena.com/imgroot/news/21/10/realme-book-slim-review/-1200w1/gsmarena_001.jpg",
        price:"$450"
    },
    {
        id:2,
        name:"Realme Gt 2 Pro",
        description:"Realme Gt 2 Pro",
        img:"https://i.gadgets360cdn.com/products/large/Realme-GT-2-Pro-648x800-1641306947.jpg",
        price:"$1000"
    },
    {
        id:3,
        name:"Realme Pad",
        description:"Realme Pad",
        img:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/09/Realme-Pad-Review-scaled.jpg?ssl=1&quality=80&w=f",
        price:"$100"
    }
]
function Realme() {
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

export default Realme