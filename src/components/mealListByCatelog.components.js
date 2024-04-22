import { useState } from 'react'
import CatelogSideBar from './catelogSideBar.components'
import MealsList from './mealList.components'

const MealsListByCatelog = () => {
  const [catelog, setCatelog] = useState('Popular')
  return (
    <div className='meal-section grid-container-2-10'>
      <div className='grid-item-2'>
        <CatelogSideBar catelog={catelog} setCatelog={setCatelog} />
      </div>
      <div className='grid-item-10'>
        <MealsList catelog='popular' />
      </div>
    </div>
  )
}

export default MealsListByCatelog
