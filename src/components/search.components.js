import UploadFileForm from './uploadFile.components'

const TextSearchForm = () => {
  return (
    <form className='search-form' method='POST'>
      <div className='search-form-group'>
        <input className='search-form-input' type='text' placeholder='Search your meal' />

        <button className='search-form-submit' type='submit'>
          <i className='bx bx-search'></i>
        </button>
      </div>
    </form>
  )
}

const Search = ({ searchType }) => {
  return (
    <div className='search'>
      <h1 className='search-heading'>FIND THE RECIPE</h1>
      {searchType === 'text' ? <TextSearchForm /> : <UploadFileForm />}
    </div>
  )
}

export default Search
