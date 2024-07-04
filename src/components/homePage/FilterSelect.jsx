import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/filterSelect.css'

const FilterSelect = ({setCategoryValue}) => {

  const [categories, getCategories] = useFetch()

  useEffect(() => {
    getCategories('/categories')
  }, [])

  const itemSelect = useRef()

  const handleChange = () => {
    setCategoryValue(itemSelect.current.value)
  }
  
  return (
    <div className='category-filter'>
      <h3>Category</h3>
      <div className='divider'></div>
      <select ref={itemSelect} onChange={handleChange}>
        <option value="">all products</option>
        {
          categories?.map((category) => (
            <option key={category.id} value={category.id}>
            {category.name}
          </option>
          ))
         }
      </select>
    </div>
  )
}

export default FilterSelect
