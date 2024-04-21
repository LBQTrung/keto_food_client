import MealsListByCatelog from './mealListByCatelog.components'
import Search from './search.components'

const Content = () => {
  return (
    <div className='content grid'>
      <Search searchType='text' />
      <MealsListByCatelog />
    </div>
  )
}

export default Content
