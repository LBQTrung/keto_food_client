import { useContext } from 'react'
import { MealsListContext } from './contextProvider.components'

const CatelogSideBar = ({ catelog, setCatelog }) => {
  const { mealsList, mealsListDispatch } = useContext(MealsListContext)

  const handleClickCatelogItem = (catelog) => {
    mealsListDispatch({
      type: 'UPDATE_MEALS_LIST',
      payload: {
        ...mealsList,
        isSearch: false,
        catelog: catelog
      }
    })
  }
  return (
    <div className='catelog'>
      <ul className='catelog-list'>
        <li className='catelog-item'>
          <button
            onClick={() => handleClickCatelogItem('Popular')}
            className={`catelog-item-link ${mealsList.catelog === 'Popular' ? 'catelog-item-link--active' : ''}`}
          >
            Popular
          </button>
        </li>
        <li className='catelog-item'>
          <button
            onClick={() => handleClickCatelogItem('Starter')}
            className={`catelog-item-link ${mealsList.catelog === 'Starter' ? 'catelog-item-link--active' : ''}`}
          >
            Starter
          </button>
        </li>
        <li className='catelog-item'>
          <button
            onClick={() => handleClickCatelogItem('Seafood')}
            className={`catelog-item-link ${mealsList.catelog === 'Seafood' ? 'catelog-item-link--active' : ''}`}
          >
            Seafood
          </button>
        </li>
        <li className='catelog-item'>
          <button
            onClick={() => handleClickCatelogItem('Vegan')}
            className={`catelog-item-link ${mealsList.catelog === 'Vegan' ? 'catelog-item-link--active' : ''}`}
          >
            Vegan
          </button>
        </li>
      </ul>
    </div>
  )
}

export default CatelogSideBar
