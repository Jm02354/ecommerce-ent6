import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css'

const FilterPrice = ({ setInputPrice }) => {
  
  const { handleSubmit, register } = useForm()
  
  const submit = (data) => {
    setInputPrice({
      from: data.from,
      to: data.to || Infinity
    })
  }
  return (
    <form className='filter-section' onSubmit={handleSubmit(submit)}>
      <h2 className='titlefilters'>Filters</h2>
        <div className='divider'></div>
        <h3>Price</h3>
        <div>
        <label htmlFor="">From</label>
        <input {...register('from')} id='from' type="number" />
        <label htmlFor="">To</label>
        <input {...register('to')} id='to' type="number" />
        <button>Filter Price</button>
      </div>
      
    </form>
  )
}

export default FilterPrice
