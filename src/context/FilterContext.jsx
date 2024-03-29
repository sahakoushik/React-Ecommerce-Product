import { createContext, useState, useEffect} from "react"

export const FilterContext = createContext();

const FilterContextProvider = ({children}) =>{
    const [selectedCategory, setSelectedCategory] = useState('')
    const [category, setCategory] = useState([]);
    const [selectedRating, setSelectedRating] = useState('');
    const [selectedPrice,setSelectedPrice] = useState('')
    const [selectedSort,setSelectedSort] = useState('')
    
    useEffect(() => {
      const fetchCategory = async() =>{
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data =  await response.json();
        console.log("data", data);
        setCategory(data);
      }
      fetchCategory();
    }, [])

    // useEffect(() => {
    //     const fetchProductList = async() =>{
    //       const response = await fetch('https://fakestoreapi.com/products');
    //       const data = await response.json();
    //       console.log(data);
    //       setProductList(data);
    //     }
    //     fetchProductList();
    //   }, [])
    
    return(
        <FilterContext.Provider 
        value={{
            category,
            selectedCategory,
            setSelectedCategory,
            selectedRating, 
            setSelectedRating,
            selectedPrice,
            setSelectedPrice,
            selectedSort,
            setSelectedSort

        }}
        >
            {children}
        </FilterContext.Provider>

    )
}

export default FilterContextProvider