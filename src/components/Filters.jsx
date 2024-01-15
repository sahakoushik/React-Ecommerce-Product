import {useContext, useEffect, useState} from 'react'
import Categories from './Categories';
import { FilterContext } from '../context/FilterContext';

const Filters = () => {
    const {category} = useContext(FilterContext)
    
  return (
    console.log("category", category),
    <div>
        <div className='text-xl text-black font-bold mb-4'>
            Category
        </div>
        {
            category.map((category) => <Categories key={category} category={category}/> ) 
        }
        
    </div>
  )
}

export default Filters