import MealsListByCatelog from './mealListByCatelog.components'
import Search from './search.components'

const Home = () => {
  return (
    <div className='content grid'>
      <Search searchType='text' />
      <MealsListByCatelog />
    </div>
  )
}

export default Home
