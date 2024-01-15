import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

const Categories = ({category}) => {
    
    const {selectedCategory,setSelectedCategory} = useContext(FilterContext)
    
    return (
        console.log("sc", selectedCategory, category),
        <div className="flex items-center mb-4">
            <button className={`p-2 bg-slate-50 text-black ${category === selectedCategory && `bg-blue-400 text-white`}`} onClick={() => setSelectedCategory(category)}>
                {category}
            </button>
            {/* <input 
                type="radio" 
                value={category}
                checked={selectedCategory === category}
                name="category-radio" 
                onChange={(e)=> setSelectedCategory(e.target.checked)}
                className=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category}</label> */}
        </div>
    )
}

export default Categories