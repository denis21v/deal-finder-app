import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Navbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  return (
    <div className='navbar'>
      {/* When on small screens this part turns into the top */}
      <div className='navbarTop'>
        <Link to='/'>
          <h1>DealFinder</h1>
        </Link>
        {/* Button that slides down navbarBottom */}
        <button
          className='hamburgerButton'
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        >
          <GiHamburgerMenu size={45} />
        </button>
      </div>

      <hr
        className={`${
          !hamburgerClicked ? 'splitLine splitLineHidden' : 'splitLine'
        }`}
      />
      {/* When on small screens this part turns into the bottom part */}
      <nav
        className={`${
          !hamburgerClicked ? 'navbarBottom linksHidden' : 'navbarBottom'
        }`}
      >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        {/* <Link to='/not-found'>Random</Link> */}
      </nav>
    </div>
  )
}

export default Navbar
