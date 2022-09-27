import Pagination from "./components/Pagination"
import Stories from "./components/Stories"
import Search from "./components/Search"
import "./App.css"
// import {useGlobalContext} from "./components/Context"
function App() {

  // const data = useGlobalContext();

  return (
   <>
   {/* <h2>Welcome to tech news - {data}</h2> */}
   <Search />
   <Pagination />
   <Stories /> 
   </>
  )
}

export default App