import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ClassificationContext, InstructionContext } from './contextProvider.components'

const Navbar = () => {
  const { classificationDispatch } = useContext(ClassificationContext)
  const { instructionDispatch } = useContext(InstructionContext)
  const location = useLocation()
  return (
    <nav className='navbar'>
      <div className='navbar-content grid'>
        <ul className='navbar-list'>
          <li className={`navbar-item ${location.pathname === '/' ? 'navbar-item--active' : ''}`}>
            <Link
              onClick={() => {
                classificationDispatch({ type: 'RESET_CLASSIFICATION' })
                instructionDispatch({ type: 'RESET_INSTRUCTION' })
              }}
              to='/'
            >
              HOME
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/recipe' ? 'navbar-item--active' : ''}`}>
            <Link
              onClick={() => {
                classificationDispatch({ type: 'RESET_CLASSIFICATION' })
                instructionDispatch({ type: 'RESET_INSTRUCTION' })
              }}
              to='/recipe'
            >
              RECIPE
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/explore' ? 'navbar-item--active' : ''}`}>
            <Link
              onClick={() => {
                classificationDispatch({ type: 'RESET_CLASSIFICATION' })
                instructionDispatch({ type: 'RESET_INSTRUCTION' })
              }}
              to='/explore'
            >
              EXPLORE
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/diet' ? 'navbar-item--active' : ''}`}>
            <Link
              onClick={() => {
                classificationDispatch({ type: 'RESET_CLASSIFICATION' })
                instructionDispatch({ type: 'RESET_INSTRUCTION' })
              }}
              to='/diet'
            >
              DIET
            </Link>
          </li>
        </ul>
        <div className='navbar-user'>
          <span className='navbar-user-avatar'>
            <i class='bx bxs-user-circle'></i>
          </span>
          <span className='navbar-user-name'>MinhT</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
