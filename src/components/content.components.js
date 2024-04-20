import Search from './search.components'

const Content = () => {
  return (
    <div className='content'>
      <Search searchType='text' />
      <br />
      <Search searchType='file' />
    </div>
  )
}

export default Content
