import React from 'react';
import Products from '../Components/Products';
const ProductsData=[
    {
        id:1,
        name:"Oppo Book",
        description:"Oppo Book",
        img:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6pro-5g-oversea/listpage/Phone-List-Page-product-list-Aurora-427-x-600.png.thumb.webp",
        price:"$450"
    },
    {
        id:2,
        name:"Oppo 15 Pro",
        description:"Oppo 15 Pro",
        img:"https://oppomot.com/wp-content/uploads/2021/09/F19PRO-copy-1.jpg",
        price:"$1000"
    },
    {
        id:3,
        name:"Oppo Pad",
        description:"Oppo Pad",
        img:"https://image.oppo.com/content/dam/oppo/product-asset-library/accessory/oppo-pad-air/global/v2/assets/module-technology/module-technology-color-phone2-purple-1920.png",
        price:"$100"
    }
]
function Oppo() {
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

export default Oppo;