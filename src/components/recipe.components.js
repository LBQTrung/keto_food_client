import { useContext, useState } from 'react'
import UploadFileForm from './uploadFile.components'
import { ClassificationContext, InstructionContext, LoadingContext } from './contextProvider.components'
import Loading from './loading.components'
import Classification from './classification.components'
import MealDetails from './mealDetails.components'
import { useLocation } from 'react-router-dom'

const Recipe = () => {
  const { loading } = useContext(LoadingContext)
  const { classification } = useContext(ClassificationContext)
  const { instruction } = useContext(InstructionContext)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const mealId = queryParams.get('meal_id')
  return (
    <>
      {' '}
      {/* Wrap conditional rendering within a fragment */}
      {loading ? (
        <Loading />
      ) : (
        <div className='content grid'>
          {mealId ? ( // Conditional rendering based on mealID
            <MealDetails mealId={mealId} />
          ) : (
            <>
              {' '}
              {/* Use another fragment for nested conditionals */}
              {classification.class ? instruction.active ? <MealDetails /> : <Classification /> : <UploadFileForm />}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Recipe
