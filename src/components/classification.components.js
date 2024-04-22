import { useContext } from 'react'
import { ClassificationContext, InstructionContext, LoadingContext } from './contextProvider.components'

const handleClassOutput = (className) => {
  const result = className.split('_').join(' ').toUpperCase()

  return result
}

const Classification = () => {
  const { classification } = useContext(ClassificationContext)
  const { setLoading } = useContext(LoadingContext)
  const { instructionDispatch } = useContext(InstructionContext)

  const handleInstruction = async () => {
    setLoading(true)
    const instructionURL = 'http://localhost:4000/food/instruct'
    const queryParams = {
      name: classification.class
    }
    const queryString = new URLSearchParams(queryParams).toString()
    const response = await fetch(`${instructionURL}?${queryString}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.error(response.statusText)
    }

    const data = await response.json()
    console.log(data)

    instructionDispatch({
      type: 'UPDATE_INSTRUCTION',
      payload: {
        active: true,
        ingredients: data.result['Ingredients'],
        instructions: data.result['Cooking Instructions'],
        side_dishes: data.result['Suitable Side Dishes']
      }
    })
    setLoading(false)
  }

  return (
    <div className='classification'>
      <div className='classification-result'>
        <div className='classification-result'>
          <h2 className='classification-result-heading'>THE DISH YOU WANT IS</h2>
          <h1 className='classification-result-name'>{handleClassOutput(classification.class)}</h1>
        </div>
      </div>

      <div className='classification-img'>
        <div
          className='classification-img-container'
          style={{ backgroundImage: `url(${classification.image_url})` }}
        ></div>
        <button onClick={handleInstruction}>DETAILS ➝</button>
      </div>
    </div>
  )
}

export default Classification
