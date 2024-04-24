import { useContext, useRef, useState } from 'react'
import MealsList from './mealList.components'
import UploadFileForm from './uploadFile.components'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MealsListContext } from './contextProvider.components'

const TextSearchForm = ({ searchText, setSearchText }) => {
  const { mealsList, mealsListDispatch } = useContext(MealsListContext)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    console.log('Submit')
    const currentInputValue = inputRef.current.value
    setSearchText(inputRef.current.value)
    mealsListDispatch({
      type: 'UPDATE_MEALS_LIST',
      payload: {
        ...mealsList,
        isSearch: true
      }
    })
    navigate(`?search=${currentInputValue}`)
  }

  return (
    <form className='search-form' method='POST'>
      <div className='search-form-group'>
        <input ref={inputRef} className='search-form-input' type='text' placeholder='Search your meal' />

        <button onClick={handleSearch} className='search-form-submit' type='submit'>
          <i className='bx bx-search'></i>
        </button>
      </div>
    </form>
  )
}

const Search = ({ searchType }) => {
  const { mealsList } = useContext(MealsListContext)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [searchText, setSearchText] = useState(queryParams.get('search'))
  const [searchResultNumber, setSearchResultNumber] = useState(0)
  // const searchText = queryParams.get('search')
  return (
    <>
      <div className='search'>
        <h1 className='search-heading'>FIND THE RECIPE</h1>
        {searchType === 'text' ? (
          <TextSearchForm searchText={searchText} setSearchText={setSearchText} />
        ) : (
          <UploadFileForm />
        )}
      </div>
      {mealsList.isSearch && (
        <div className='search-result'>
          <span className='search-message'>
            {searchResultNumber > 0
              ? `You have found ${searchResultNumber} ${searchResultNumber > 1 ? 'meals' : 'meal'}`
              : 'No meal found'}
          </span>
          <MealsList
            type={'search list'}
            mealsPerRow={5}
            searchText={searchText}
            setSearchResultNumber={setSearchResultNumber}
          />
          <hr />
        </div>
      )}
    </>
  )
}

export default Search
