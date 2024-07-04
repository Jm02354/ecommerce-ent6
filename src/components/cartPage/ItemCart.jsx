import React from 'react'
import './styles/itemCart.css'
import { deleteProductsThunk, updateProductsThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ItemCart = ({ prod }) => {
  
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProductsThunk(prod.id))
  }

  const handleLess = () => {
    if (prod.quantity > 1) {
      dispatch(updateProductsThunk(prod.id, {"quantity": prod.quantity - 1
    }))
    }
  }

  const handlePlus = () => {
    dispatch(updateProductsThunk(prod.id, {"quantity": prod.quantity + 1
    }))
  }

  return (
    <div>
      <article className='itemcart'>
        <h3 className='itemcart__title'>{prod.product?.title}</h3>
        <figure className='itemcart__img'>
          <img src={prod.product?.images[0].url} alt="product image" />
        </figure>
        <div className='itemcart__buttons'>
          <button onClick={handleLess}>-</button>
          <span>{prod.quantity}</span>
          <button onClick={handlePlus}>+</button>
        </div>
        <button onClick={handleDelete} className='itemcart__btn'>Delete</button>
        <p className='itemcart__total'>Total: $ <span>{prod.product?.price * prod.quantity}</span></p>
      </article>
      {/* <div className='cart-total'>
        <p className='itemcart__total'>Total: $ <span>{prod.product?.price * prod.quantity}</span></p>
      </div> */}
      <button className='checkout-button'><Link to={'/purchases'}>Checkout</Link></button>
    </div>
  )
}

export default ItemCart
