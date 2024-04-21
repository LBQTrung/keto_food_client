const CatelogSideBar = () => {
  return (
    <div className='catelog'>
      <ul className='catelog-list'>
        <li className='catelog-item'>
          <button className='catelog-item-link catelog-item-link--active'>Popular</button>
        </li>
        <li className='catelog-item'>
          <button className='catelog-item-link'>Starter</button>
        </li>
        <li className='catelog-item'>
          <button className='catelog-item-link'>Seafood</button>
        </li>
        <li className='catelog-item'>
          <button className='catelog-item-link'>Vegan</button>
        </li>
      </ul>
    </div>
  )
}

export default CatelogSideBar
