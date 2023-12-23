import React from 'react';
import Facebook from '../../../Images/Facebook footer.svg';
import Google from '../../../Images/Google Footer.svg';
import Instagram from '../../../Images/instagram footer.svg';
import Apple from '../../../Images/Apple footer.svg';
import '../style.css';

function Footer() {
  return (
    <section class="footer-section mb-0 mt-2">
      <div class="container">
        <ul class="list-inline footer-list">
          <li class="list-inline-item"><a href="">About Us</a></li>
          <li class="list-inline-item"><a href="">Why Choose Us?</a></li>
          <li class="list-inline-item"><a href="">Products</a></li>
          <li class="list-inline-item"><a href="">Resources</a></li>
          <li class="list-inline-item"><a href="">Company</a></li>
        </ul>
        <div class="text-center">
          <ul class="list-inline social-icn pt-4">
            <li class="list-inline-item">
              <img src={Facebook} alt="facebook"/>
            </li>
            <li class="list-inline-item">
            <img src={Google} alt="google"/>
            </li>
            <li class="list-inline-item">
            <img src={Instagram} alt="instagram"/>
            </li>
            <li class="list-inline-item">
            <img src={Apple} alt="apple"/>
            </li>
          </ul>
          <p>© 2023 SnapTap. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
