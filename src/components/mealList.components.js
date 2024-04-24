import { useContext, useEffect, useState } from 'react'
import { LoadingContext, MealsListContext } from './contextProvider.components'
import { useNavigate } from 'react-router-dom'

const MealsList = ({ type, mealsPerRow, searchText, catelog, setSearchResultNumber }) => {
  const { mealsList, mealsListDispatch } = useContext(MealsListContext)
  const { setLoading } = useContext(LoadingContext)
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if (type !== 'search list') getRandomMeals(mealsList.catelog)
  }, [mealsList.catelog])

  useEffect(() => {
    if (mealsList.isSearch) {
      if (searchText) getSearchMeals(searchText)
    }
  }, [searchText])

  const getRandomMeals = async (category) => {
    const handledCategory = category === 'Popular' ? 'Pork' : category
    const categoryURL = 'http://localhost:4000/food/category'
    const queryParams = {
      category: handledCategory
    }
    const queryString = new URLSearchParams(queryParams).toString()
    const response = await fetch(`${categoryURL}?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.error(response.statusText)
    }

    const data = await response.json()
    console.log(data)

    const mealsResult = data.result
    setMeals(mealsResult)
  }

  const getSearchMeals = async (searchText) => {
    if (searchText) {
      const categoryURL = 'http://localhost:4000/food/text-search'
      const queryParams = {
        name: searchText
      }
      const queryString = new URLSearchParams(queryParams).toString()
      const response = await fetch(`${categoryURL}?${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        console.error(response.statusText)
      }

      const data = await response.json()
      console.log(data)

      const mealsResult = data.result || []
      setMeals(mealsResult)
      setSearchResultNumber(mealsResult.length)
    }
  }

  const handleClickDetails = (mealId) => {
    if (mealId) {
      const query = new URLSearchParams({
        meal_id: mealId
      })
      navigate('/recipe?' + query)
    }
  }

  return (
    <div className={mealsPerRow === 4 ? 'grid-container-3-3-3-3' : 'grid-container-24-24-24-24-24'}>
      {!!meals &&
        meals.map((meal) => {
          return (
            <div className='meal-item grid-item-3-3-3-3'>
              {/* <img src={!!meal && meal.image_url} alt='bunbohue' className='meal-item-image' /> */}
              <div
                style={{ backgroundImage: `url(${!!meal && meal.image_url})` }}
                alt='bunbohue'
                className='meal-item-image'
              ></div>
              <h2 className='meal-item-name'>{!!meal && meal.meal_name}</h2>
              <div className='meal-item-origin-and-button'>
                <span className='meal-item-origin'>{(!!meal && meal.area) || mealsList.catelog}</span>
                <button onClick={() => handleClickDetails(meal.meal_id)} className='meal-item-button'>
                  Recipe
                </button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MealsList
