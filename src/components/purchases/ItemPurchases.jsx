import React from 'react'
import './styles/itemPurchases.css'
import { useNavigate } from 'react-router-dom'

const ItemPurchases = ({ purchase }) => {

  const navigate = useNavigate();
  
  const handleDetail = () => {
    navigate(`/product/${purchase.id}`)
  }
  
  console.log(purchase)
  return (

    <div className='itempurchase'>
      
      <ul className='itempurchase__products'>
        <li className='itempurchase__list'>
          <figure>
            <img onClick={handleDetail} className='itempurchase__img' src={purchase.product?.images[0].url} alt="product image" />
          </figure>
          <h3>{purchase.product?.title}</h3>
          <p className='itempurchase__quantity'>Quantity {purchase.quantity}</p>
          <p className='itempurchase__price'>$ {purchase.product?.price}</p>
        </li>
      </ul>
      </div>
  )
}

export default ItemPurchases
