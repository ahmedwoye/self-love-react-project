import React, {useState} from 'react'
import './Navbar.css';

import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

     
    
  return (
    <>
<nav className='navbar'>
    <div className='navbar-container'>
<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
Self-love is a luxury

<i class= 'fab fa-fa-typo3' />
   </Link>
 
 <div className='menu-icon' onClick={handleClick} >
 <i className={click ? 'fa fa-times' : "fa fa-bars"} />
 
 </div>

 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             

 <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
 

            <li className='nav-item'>
              <Link to={"/gallery"} className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='https://instagram.com/clemen_bayo?igshid=NTc4MTIwNjQ2YQ==' className='nav-links' onClick={closeMobileMenu}>
                <i  class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </li>

          
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <i  class="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
            </li> */}
             

          </ul>
         
 </div>
 </nav>
    </>
  )
}

export default Navbar