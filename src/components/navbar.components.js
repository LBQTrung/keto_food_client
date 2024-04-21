import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content grid'>
        <ul className='navbar-list'>
          <li className='navbar-item navbar-item--active'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/recipe'>RECIPE</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/'>EXPLORE</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/'>DIET</Link>
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
