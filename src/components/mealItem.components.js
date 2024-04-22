const MealItem = ({ meal }) => {
  console.log(meal.image_url)
  return (
    <div className='meal-item'>
      <img src={meal ? meal.image_url : ''} alt='bunbohue' className='meal-item-image' />
      <h2 className='meal-item-name'>{meal.meal_name || ''}</h2>
      <div className='meal-item-origin-and-button'>
        <span className='meal-item-origin'>{meal.area || ''}</span>
        <button className='meal-item-button'>Recipe</button>
      </div>
    </div>
  )
}

export default MealItem
