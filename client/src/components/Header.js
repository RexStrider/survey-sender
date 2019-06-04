import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <section className='nav-wrapper'>
                    <a className='left brand-logo'>
                        Survey Sender
                    </a>
                    <ul className='right'>
                        <li>
                            <a>Login with Google</a>
                        </li>
                    </ul>
                </section>
            </nav>
        );
    }
}
 
export default Header;