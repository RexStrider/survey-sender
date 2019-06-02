import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>get a Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    state = {  }
    render() { 
        return (
            <section>
                <BrowserRouter>
                    <section>
                        <Route exact path="/" component={Landing} />
                        <Route path="/surveys" component={Dashboard} />
                        <Route path="/surveynew" component={SurveyNew} />
                    </section>
                </BrowserRouter>
            </section>
        );
    }
}
 
export default App;