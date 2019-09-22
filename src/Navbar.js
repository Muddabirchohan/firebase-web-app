import React, { Component } from 'react';
import profile from './assets/dummy.jpg'


class Navbar extends Component {
    render() {
        return (
            <div>
            <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Customer</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li> <img src={profile} style={{width: '30px',borderRadius: '50%'}}/> </li>
              </ul>
            </div>
          </nav>
            </div>
        );
    }
}

export default Navbar;