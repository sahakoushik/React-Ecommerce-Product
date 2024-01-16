import {useContext,useCallback,useEffect} from 'react'
import Product from './Product'
import { ProductContext } from '../context/ProductContext'
import { FilterContext } from '../context/FilterContext'
import { Loading } from './Loading'

const ProductList = () => {
    const {productList,search,setSearch,loading,error,setProductList} = useContext(ProductContext)
    const {selectedCategory,selectedRating, selectedPrice,selectedSort} = useContext(FilterContext)
    
    useEffect(() => {
        sorting();
    }, [selectedSort])
    
    const filterByCategory = useCallback((product) => {
        if( !selectedCategory) {
            return product
        }else{
            return product.category === selectedCategory
        }
    },[selectedCategory]);
    
    const filterByRating = (product) => {
        if( !selectedRating) {
            return product
        }else{
            return product.rating.rate.toString().charAt(0) === selectedRating.toString()
        }
    };

    const filterByPrice = (product) => {
        console.log("sp", selectedPrice)
        if( !selectedPrice) {
            return product
        }else{
            return product.price <= selectedPrice.max && product.price >= selectedPrice.min
        }
    };
    
    const sorting = () => {
        const productListCopy = [...productList]
        if(!selectedSort){
             productListCopy
        }
        productListCopy.sort((a,b)=> {
            if(selectedSort === "low"){
                return a.price - b.price
            }
            if(selectedSort === "high"){
                return b.price - a.price
            }
            if(selectedSort === "ascending"){
                return a.title.localeCompare(b.title)
            }
            if(selectedSort === "descending"){
                return b.title.localeCompare(a.title)
            }

        })
        setProductList(productListCopy)    
    };

    if(loading) return <Loading/>

    if(error) return <div className='font-bold text-3xl text-red-500'> {error.message ? error.message : "There is an error!!"} </div>
    
    return (
        console.log(productList),
        <div className='flex-1'>
            <div className='flex-1 justify-center align-center'>
                <input
                    className='mx-auto flex bg-slate-100 p-3 w-1/2 shadow-lg' 
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)} 
                    type="text" 
                    placeholder="Search by Product Name"
                />
            </div>
            <div className='p-4 m-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    productList
                        .filter((product)=> search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search))
                        .filter(filterByCategory)
                        .filter(filterByRating)
                        .filter(filterByPrice)
                        .map((product) => <Product key={product.id} product={product}/> ) 
                }
            </div>
        </div>
    )
}

export default ProductList