const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <ul className='navbar-list'>
          <li className='navbar-item'>HOME</li>
          <li className='navbar-item navbar-item--active'>RECIPE</li>
          <li className='navbar-item'>EXPLORE</li>
          <li className='navbar-item'>DIET</li>
        </ul>
        <div className='navbar-user'>
          <span className='navbar-user-avatar'>
            <i class='bx bxs-user-circle'></i>
          </span>
          <span className='navbar-user-name'>MinhT</span>
        </div>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar
