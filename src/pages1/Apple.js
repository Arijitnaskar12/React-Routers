import React from 'react';
 import Products from '../Components/Products';
const ProductsData=[
    {
        id:1,
        name:"Macbook Pro",
        description:"Macbook Pro",
        img:"https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M2_Pro/AKA8518.jpg",
        price:"$1450"
    },
    {
        id:2,
        name:"iPhone 14 Max Pro",
        description:"iPhone 14 Max Pro",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0zoWRNdrS-adws2WhQwAGCSl5ReDMOJ0Sg&usqp=CAU",
        price:"$145"
    },
    {
        id:3,
        name:"iPad",
        description:"iPad",
        img:"https://images.hindustantimes.com/tech/img/2022/11/18/1600x900/IMG_5135_1667639923489_1668738656167_1668738656167.jpg",
        price:"$100"
    }
]
function Apple() {
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

export default Apple;