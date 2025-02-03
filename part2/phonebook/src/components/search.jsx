import react from 'react' 

const Search = ({search, handleSearchChange}) => {
  return (
    <input placeholder="Search..." 
      value={search}
      onChange={handleSearchChange}
    />
  )
}

export default Search