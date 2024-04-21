import testImage from '../assets/image/bunbo.jpg'

const MealItem = () => {
  return (
    <div className='meal-item'>
      <img src={testImage} alt='bunbohue' className='meal-item-image' />
      <h2 className='meal-item-name'>Bun Bo Hue</h2>
      <div className='meal-item-origin-and-button'>
        <span className='meal-item-origin'>Vietnam</span>
        <button className='meal-item-button'>Recipe</button>
      </div>
    </div>
  )
}

export default MealItem
