import { useContext } from 'react'
import UploadFileForm from './uploadFile.components'
import { ClassificationContext, InstructionContext, LoadingContext } from './contextProvider.components'
import Loading from './loading.components'
import Classification from './classification.components'
import MealDetails from './mealDetails.components'

const Recipe = () => {
  const { loading } = useContext(LoadingContext)
  const { classification } = useContext(ClassificationContext)
  const { instruction } = useContext(InstructionContext)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        // <div className='content grid'>{classification.class ? <Classification /> : <UploadFileForm />}</div>
        <div className='content grid'>
          {classification.class ? instruction.active ? <MealDetails /> : <Classification /> : <UploadFileForm />}
        </div>
      )}
    </>
  )
}

export default Recipe
