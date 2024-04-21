import { useContext } from 'react'
import { ClassificationContext } from './contextProvider.components'
import textImage from '../assets/image/bunbo.jpg'

const Classification = () => {
  const { classification } = useContext(ClassificationContext)

  return (
    <div className='classification'>
      <div className='classification-result'>
        <div className='classification-result'>
          <h2 className='classification-result-heading'>THE DISH YOU WANT IS</h2>
          <h1 className='classification-result-name'>{classification}</h1>
        </div>
      </div>

      <div className='classification-img'>
        <div className='classification-img-container' style={{ backgroundImage: `url(${textImage})` }}></div>
        <button>DETAILS ➝</button>
      </div>
    </div>
  )
}

export default Classification
