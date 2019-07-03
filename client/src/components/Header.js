import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
        return (
            <nav>
                <section className='nav-wrapper'>
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className='left brand-logo'
                    >
                        Survey Sender
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
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