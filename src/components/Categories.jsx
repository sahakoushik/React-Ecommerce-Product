import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

const Categories = ({category}) => {
    
    const {selectedCategory,setSelectedCategory} = useContext(FilterContext)
    
    return (
        console.log("sc", selectedCategory, category),
        <div className="flex items-center mb-4">
            <button className={`p-2 ${category === selectedCategory ? `bg-blue-400 text-white` : `bg-slate-50 text-black` }`} onClick={() => setSelectedCategory(category)}>
                {category}
            </button>
        </div>
    )
}

export default Categories