import React, { useEffect } from 'react'
import ProdSlider from '../components/prodInfo/ProdSlider'
import ProdDetail from '../components/prodInfo/ProdDetail'
import ProdSimilar from '../components/prodInfo/ProdSimilar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import './styles/prodInfo.css'

const ProdInfo = () => {

  const { id } = useParams()
  
  const dispatch = useDispatch()

  // const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products/1'

  const products = useSelector(store => store.products)

  
  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  
  let product = products?.filter(prod => prod.id === +id)[0]

  return (
    <>
      <div className='prodinfo'>
        <ProdSlider
          product={product}
        />
        <ProdDetail
          product={product}
        />
      </div>
      <div className='prodinfosimilar'>
        <ProdSimilar
          product={product}
        />
      </div>
    </>
  )
}

export default ProdInfo
