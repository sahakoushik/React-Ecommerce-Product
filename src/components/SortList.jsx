import { useContext } from 'react'
import { sortingData } from '../api/filterData'
import { FilterContext } from '../context/FilterContext'

const SortList = () => {

    const {setSelectedSort} = useContext(FilterContext)

    const handelSelect = (e) =>{
        setSelectedSort(e.target.value)
    }
    return (
        <select onChange={handelSelect}>
            {
                sortingData.map((item)=>(
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))
            }
        </select>
    )
}

export default SortList