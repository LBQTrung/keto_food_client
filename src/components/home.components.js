import { useContext } from 'react'
import { LoadingContext } from './contextProvider.components'
import MealsListByCatelog from './mealListByCatelog.components'
import Search from './search.components'
import Loading from './loading.components'

const Home = () => {
  const { loading } = useContext(LoadingContext)
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
