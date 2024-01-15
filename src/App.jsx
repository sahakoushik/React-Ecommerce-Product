
import ProductList from "./components/ProductList"
import Filters from "./components/Filters"

function App() {
  return(
    <div className="flex flex-row m-8">
      <aside className="h-screen sticky top-0 w-60">
        <Filters/> 
      </aside>
      <ProductList/>
    </div>
  )
}

export default App
