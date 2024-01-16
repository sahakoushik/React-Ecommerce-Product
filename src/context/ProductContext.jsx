import { createContext, useState, useEffect} from "react"

export const ProductContext = createContext();

const ProductContextProvider = ({children}) =>{
    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setProductList(data);
                setLoading(false)
            } catch(error) {
                
                setLoading(false);
                console.log(error);
                setError(error);
            }
          }
        
          fetchProductList();
      }, [])
    
    return(
        <ProductContext.Provider 
        value={{
            loading,
            error,
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

export default ProductContextProvider