import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './Surveys/SurveyList';

const Dashboard = () => {
    return (
        <section>
            <SurveyList />
            <section className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </section>
        </section>
    )
}
 
export default Dashboard;