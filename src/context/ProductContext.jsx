import { createContext, useState, useEffect} from "react"

export const ProductContext = createContext();

const ProductState = ({children}) =>{
    const [productList, setProductList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchProductList = async() =>{
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          console.log(data);
          setProductList(data);
        }
        fetchProductList();
      }, [])
    
    return(
        <ProductContext.Provider 
        value={{
            search,
            setSearch,
            productList,
            setProductList,
        }}
        >
            {children}
        </ProductContext.Provider>

    )
}

export default ProductState