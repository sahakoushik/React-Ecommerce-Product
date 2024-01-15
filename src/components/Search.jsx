import {useContext} from 'react'

const Search = () => {

    const {search,setSearch} = useContext(ProductContext)
    return (
        <div className='flex-1 justify-center align-center'>
            <input
                className='mx-auto flex bg-slate-100 p-3 w-1/2 shadow-lg' 
                value={search} 
                onChange={(e)=> setSearch(e.target.value)} 
                type="text" 
                placeholder="Search by Product Name"
            />
        </div>
  )
}

export default Search