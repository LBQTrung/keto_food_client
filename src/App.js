import Home from './components/home.components'
import Navbar from './components/navbar.components'
import './assets/css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClassificationProvider, LoadingProvider, InstructionProvider } from './components/contextProvider.components'
import Recipe from './components/recipe.components'

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ClassificationProvider>
          <InstructionProvider>
            <div className='app'>
              <div className='background-overlay'></div>
              <div className='wrapper'>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/recipe' element={<Recipe />} />
                </Routes>
              </div>
            </div>
          </InstructionProvider>
        </ClassificationProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
