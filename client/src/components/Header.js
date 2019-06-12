import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'resolving request...';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

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
                            {this.renderContent()}
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