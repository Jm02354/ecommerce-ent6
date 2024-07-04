import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/purchases.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import ItemPurchases from '../components/purchases/ItemPurchases'

const Purchases = () => {

  const [buy, setBuy] = useState(false)
 
  const purchasesSlice = useSelector(store => store.purchasesSlice)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  useEffect(() => {
    if (purchasesSlice[0]) {
    setBuy(true)
  }
  }, [purchasesSlice])

  
  return (
  <>
    {
      buy?
          <div>
            {
              purchasesSlice.map(purchase => (
                <ItemPurchases
                  key={purchase.id}
                  purchase={purchase}
                />
              ))
            }
          </div >
        :
        <div className='purchaseslink-container'>
          <ul className='purchaseslinks'>
            <li className='homelinks'><Link to={'/'}>Home</Link></li>
            <li>purchases</li>
          </ul>
          <h2>My purchases</h2>
          <p>You haven´t bought anything yet. <Link to={'/'}> <span> See Products</span></Link></p>
        </div>
      }
      </>
  )
}

export default Purchases
