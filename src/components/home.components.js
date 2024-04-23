import { useContext } from 'react'
import { LoadingContext } from './contextProvider.components'
import MealsListByCatelog from './mealListByCatelog.components'
import Search from './search.components'
import Loading from './loading.components'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { loading } = useContext(LoadingContext)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const mealName = queryParams.get('meal_name')
  console.log(mealName)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='content grid'>
          <Search searchType='text' />
          <MealsListByCatelog />
        </div>
      )}
    </>
  )
}

export default Home
