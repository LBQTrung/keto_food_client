import { useContext } from 'react'
import testImage from '../assets/image/bunbo.jpg'
import { ClassificationContext, InstructionContext } from './contextProvider.components'

const handleClassOutput = (className) => {
  const result = className.split('_').join(' ').toUpperCase()

  return result
}

const MealDetails = () => {
  const { instruction } = useContext(InstructionContext)
  const { classification } = useContext(ClassificationContext)
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

export default MealDetails
