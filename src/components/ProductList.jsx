import {useContext,useEffect} from 'react'
import Product from './Product'
import { ProductContext } from '../context/ProductContext'
import { FilterContext } from '../context/FilterContext'

const ProductList = () => {
    const {productList,search,setSearch} = useContext(ProductContext)
    const {selectedCategory} = useContext(FilterContext)
    // const [product, setProduct] = useState([])
    // const [search, setSearch] = useState([])

    // useEffect(() => {
    //     const fetchProduct = async() =>{
    //       const response = await fetch('https://fakestoreapi.com/products')
    //       const data = await response.json()
          
    //       setProduct(data)
    //     }
    //     fetchProduct()
    //   }, [])
    
    return (
        // console.log(productList),
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
                        .filter((product)=> {
                            if(!selectedCategory){
                                return product
                            }else{
                                return product.category === selectedCategory
                            }
                        })
                        .map((product) => <Product key={product.id} product={product}/> ) 
                }
            </div>
        </div>
    )
}

export default ProductList