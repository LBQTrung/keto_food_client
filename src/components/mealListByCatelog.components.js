import CatelogSideBar from './catelogSideBar.components'
import MealsList from './mealList.components'

const MealsListByCatelog = (mealsPerRow) => {
  return (
    <div className='meal-section grid-container-2-10'>
      <div className='grid-item-2'>
        <CatelogSideBar />
      </div>
      <div className='grid-item-10'>
        <MealsList />
      </div>
    </div>
  )
}

export default MealsListByCatelog
