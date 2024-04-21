import loadingGif from '../assets/image/loading3.gif'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center' }} className='loading-container'>
      <img src={loadingGif} alt='Loading...' className='loading-gif' />
    </div>
  )
}

export default Loading
