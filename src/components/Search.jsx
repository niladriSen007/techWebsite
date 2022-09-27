import { useGlobalContext } from "./Context"
function Search() {
  // const name  = useGlobalContext();
  const {query,searchPost} = useGlobalContext();
  return (
    <>
      <h1>Niladri Tech Website</h1>
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input type="text" value={query} onChange={(e)=>searchPost(e.target.value)} />
      </div>
    </form>
    </>
  )
}

export default Search