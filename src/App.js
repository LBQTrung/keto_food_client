import Content from './components/content.components'
import Navbar from './components/navbar.components'
import './assets/css/app.css'

function App() {
  return (
    <div className='app'>
      <div className='background-overlay'></div>
      <div className='wrapper'>
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default App
