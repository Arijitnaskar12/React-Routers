import React from 'react'

function Products({name,image,des,price}) {
  return (
    <div className='products'>
    <img src={image}/>
    <h3>{name}</h3>
    <p>{des}</p>
    <p>{price}</p>
    </div>
  )
}

export default Products;