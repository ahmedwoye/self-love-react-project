import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Self-love is a luxury
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>self-love-is-a-luxury © 2023</small>
          <div class='social-icons'>
             
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://instagram.com/clemen_bayo?igshid=NTc4MTIwNjQ2YQ==" }} target="_blank"
              aria-label='Instagram'
            >




              <i class="fa fa-instagram" aria-hidden="true"></i>
      
            </Link>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
