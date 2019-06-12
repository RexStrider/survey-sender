import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() { 
        console.log(this.props);
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

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);