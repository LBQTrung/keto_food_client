const TextSearchFormGroup = () => {
  return (
    <div className='search-form-group'>
      <input className='search-form-input' type='text' placeholder='Search your meal' />

      <button className='search-form-submit' type='submit'>
        <i className='bx bx-search'></i>
      </button>
    </div>
  )
}

const UploadFileFormGroup = () => {
  return (
    <div className='search-form-group search-form-group--file'>
      <input className='search-form-input search-form-input--file' type='file' />
      <span className='search-form-label--file'>Select your meals</span>
      <button className='search-form-submit' type='submit'>
        <i className='bx bx-upload'></i>
      </button>
    </div>
  )
}

const Search = ({ searchType }) => {
  return (
    <div className='search'>
      <h1 className='search-heading'>FIND THE RECIPE</h1>

      <form className='search-form' method='POST'>
        {searchType === 'text' ? <TextSearchFormGroup /> : <UploadFileFormGroup />}
      </form>
    </div>
  )
}

export default Search
