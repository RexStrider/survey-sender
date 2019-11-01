import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
import Dashboard from "./Dashboard"
import SurveyNew from "./Surveys/SurveyNew";


class App extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchUser();
    }

    render() { 
        return (
            <section className='container'>
                <BrowserRouter>
                    <section>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </section>
                </BrowserRouter>
            </section>
        );
    }
}
 
export default connect(null, actions)(App);