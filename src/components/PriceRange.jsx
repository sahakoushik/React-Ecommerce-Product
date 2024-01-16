import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

const PriceRange = ({price}) => {
    
    const {selectedPrice,setSelectedPrice} = useContext(FilterContext)
    
    return (
        <div className="flex items-center mb-4">
            <button className={`p-2 ${price === selectedPrice ? `bg-blue-400 text-white` : `bg-slate-50 text-black` }`} onClick={() => setSelectedPrice(price)}>
                {price.label}
            </button>
        </div>
    )
}

export default PriceRange