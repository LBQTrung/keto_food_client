import { useContext } from 'react'
import UploadFileForm from './uploadFile.components'
import { ClassificationContext, LoadingContext } from './contextProvider.components'
import Loading from './loading.components'
import Classification from './classification.components'

const Recipe = () => {
  const { loading } = useContext(LoadingContext)
  const { classification, setClassification } = useContext(ClassificationContext)
  setClassification('PHO')
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='content grid'>{classification ? <Classification /> : <UploadFileForm />}</div>
      )}
    </>
  )
}

export default Recipe
