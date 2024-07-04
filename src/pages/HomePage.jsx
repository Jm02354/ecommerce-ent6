import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import ProdCard from '../components/homePage/ProdCard'
import './styles/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice'
import FilterSelect from '../components/homePage/FilterSelect'
const body = document.querySelector('body')

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });
  const [categoryValue, setCategoryValue] = useState('')
  const [menu, setMenu] = useState(false)
  
  const products = useSelector((store) => store.products)

  const dispatch = useDispatch();

  console.log(categoryValue)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const textInput = useRef()

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase())
  }

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price = +prod.price <= +inputPrice.to && +prod.price >= +inputPrice.from
    const category = categoryValue==='' ? true : prod.categoryId === +categoryValue
    return name && price && category
  }

  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleMode = () => {
    body.classList.toggle('dark')
  }
  return (
    <div className='homepage'>
      
      <div className={`homepage__filters ${menu && 'active'}`}>
        <button className='btnx' onClick={handleMenu}>X</button>
        <div className='homepage__searcher2'>
        <FilterPrice
          setInputPrice={setInputPrice}
        />
        <FilterSelect
          setCategoryValue={setCategoryValue}
          />
        <div>
            <button className='btnmode' onClick={handleMode}><ion-icon name="invert-mode-outline"></ion-icon></button>
        </div>        
      </div>
        </div>
        
      <div className='input'>
        <input className='inputext' ref={textInput} onChange={handleChange} type="text" placeholder='What are you looking for?' />
        <button className='inputbtn'><ion-icon name="search-outline"></ion-icon></button>
      </div>

        <button className={menu && 'active'} onClick={handleMenu}><ion-icon name="filter-outline"></ion-icon></button>
      <div className='homepage__container'>
        {
          products?.filter(cbFilter).map((prod) => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
        </div>
 
      </div>

  )
}

export default HomePage
