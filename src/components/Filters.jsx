import {useContext} from 'react'
import Categories from './Categories';
import { FilterContext } from '../context/FilterContext';
import Rating from './Rating';
import {ratingData, priceRange} from '../api/filterData';
import PriceRange from './PriceRange';
import SortList from './SortList';

const Filters = () => {
    const {category} = useContext(FilterContext)
    
  return (
    console.log("category", category),
    <>
      {/* sort filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Sort by
        </div>
        <SortList/>
      </div>

      {/* category filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Category
        </div>
        
          {
              category.map((category) => <Categories key={category} category={category}/> ) 
          }
      </div>

      {/* rating filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Rating
        </div>
        <div className='flex'>
        {
          ratingData.map((rating)=> <Rating key={rating} rating={rating} />)
        }
        </div>
      </div>

      {/* price filter */}
      <div>
        <div className='text-xl text-black font-bold mb-4'>
            Price Range
        </div>
        <div className='flex flex-col'>
        {
          priceRange.map((price)=> <PriceRange key={price.label} price={price}/>)
        }
        </div>
      </div>
    </>
  )
}

export default Filters