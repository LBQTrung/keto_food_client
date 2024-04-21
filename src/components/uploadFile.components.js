import React, { useState, useRef } from 'react'

const UploadFileForm = () => {
  const [selectedImageToCallAPI, setSelectedImageToCallAPI] = useState(null)
  const [selectedImageToPreview, setSelectedImageToPreview] = useState(null)
  const inputRef = useRef(null)
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0]
    if (imageFile) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImageToPreview(reader.result)
      }
      reader.readAsDataURL(imageFile)
      setSelectedImageToCallAPI(imageFile)
    }
  }
  const handleSubmit = async () => {
    try {
      if (!selectedImageToCallAPI) {
        console.log('Please select an image.')
        return
      }
      const formData = new FormData()
      formData.append('image', selectedImageToCallAPI)

      const response = await fetch('http://localhost:4000/media/upload', {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        const data = await response.json()
        console.log('API response:', data)
      } else {
        console.error('Failed to call API:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const clickFileInput = (event) => {
    event.preventDefault()

    inputRef.current.click()
  }
  return (
    <div>
      <div className='search'>
        <h1 className='search-heading'>FIND THE RECIPE</h1>
        <form className='search-form' method='POST'>
          <div className='search-form-group search-form-group--file'>
            <input
              onChange={handleImageChange}
              ref={inputRef}
              className='search-form-input search-form-input--file'
              type='file'
              accept='image/*'
            />
            <span className='search-form-label--file'>Select your meals</span>
            <button onClick={clickFileInput} className='search-form-submit' type='submit'>
              <i className='bx bx-upload'></i>
            </button>
          </div>
        </form>
      </div>

      {selectedImageToPreview && (
        <div className='upload-seleted-image'>
          <img src={selectedImageToPreview} alt='Preview' width='200' height='200' />
          <button onClick={handleSubmit}>Recognize this meal</button>
        </div>
      )}
    </div>
  )
}

export default UploadFileForm
