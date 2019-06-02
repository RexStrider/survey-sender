import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>get a Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return(
            <section>
                <BrowserRouter>
                    <section>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </section>
                </BrowserRouter>
            </section>
    )
}
 
export default App;