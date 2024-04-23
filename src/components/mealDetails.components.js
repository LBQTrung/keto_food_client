import { useContext, useEffect, useState } from 'react'
import testImage from '../assets/image/bunbo.jpg'
import { ClassificationContext, InstructionContext } from './contextProvider.components'

const handleClassOutput = (className) => {
  const result = className.split('_').join(' ').toUpperCase()

  return result
}

const ClassificationMealDetails = ({ classification, instruction }) => {
  return (
    <div className='meal-details'>
      <div className='meal-details-info'>
        <div className='meal-details-info-img' style={{ backgroundImage: `url(${classification.image_url})` }}></div>
        <h2 className='meal-details-info-name'>{handleClassOutput(classification.class)}</h2>
        <h3 className='meal-details-side-dishes-heading'>Suitable Side Dishes</h3>
        <ul className='meal-details-side-dishes-list'>
          {instruction.side_dishes.map((item, index) => {
            return (
              <li className='meal-details-side-dishes-item'>
                {index + 1}. {item}
              </li>
            )
          })}
        </ul>
      </div>

      <div className='meal-details-intructions scrollbar'>
        <h2 className='meal-details-intructions-heading'>Instructions</h2>
        <ul className='meal-details-instructions-list'>
          {instruction.instructions.map((item, index) => {
            return (
              <li className='meal-details-instructions-item'>
                {index + 1}. {item}
              </li>
            )
          })}
        </ul>
      </div>

      <div className='meal-details-ingredients'>
        <h2 className='meal-details-ingredients-heading'>Ingredients</h2>
        <ul className='meal-details-ingredients-list'>
          {instruction.ingredients.map((item) => {
            return <li className='meal-details-ingredients-item'>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

const BasicMealDetails = ({ mealId }) => {
  const [meal, setMeal] = useState({})

  useEffect(() => {
    getMealDetail(mealId)
  }, [])

  const getMealDetail = async (mealId) => {
    const detailsURL = 'http://localhost:4000/food/details'
    const queryParams = {
      id: mealId
    }
    const queryString = new URLSearchParams(queryParams).toString()
    const response = await fetch(`${detailsURL}?${queryString}`, {
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

    setMeal(data.result)
  }
  return (
    <div className='meal-details'>
      <div className='meal-details-info'>
        <div
          className='meal-details-info-img'
          style={{ backgroundImage: `url(${!!meal.image_url && meal.image_url})` }}
        ></div>
        <h2 className='meal-details-info-name'>{!!meal.meal_name && meal.meal_name}</h2>
        <h3 className='meal-details-side-dishes-heading'>{!!meal.area && meal.area}</h3>
      </div>

      <div className='meal-details-intructions scrollbar'>
        <h2 className='meal-details-intructions-heading'>Instructions</h2>
        <ul className='meal-details-instructions-list'>
          <li className='meal-details-instructions-item'>{!!meal.instructions && meal.instructions}</li>
        </ul>
      </div>

      <div className='meal-details-ingredients'>
        <h2 className='meal-details-ingredients-heading'>Ingredients</h2>
        <ul className='meal-details-ingredients-list'>
          {!!meal.ingredients &&
            meal.ingredients.map((item) => {
              return <li className='meal-details-ingredients-item'>{item}</li>
            })}
        </ul>
      </div>
    </div>
  )
}

const MealDetails = ({ mealId }) => {
  const { instruction } = useContext(InstructionContext)
  const { classification } = useContext(ClassificationContext)

  return classification.class ? (
    <ClassificationMealDetails classification={classification} instruction={instruction} />
  ) : (
    <BasicMealDetails mealId={mealId} />
  )
}

export default MealDetails
