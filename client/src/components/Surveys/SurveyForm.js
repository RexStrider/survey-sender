import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
    render() { 
        return (
            <section>
                <h2>Survey Form</h2>
            </section>
        );
    }
}
 
export default reduxForm({
    from: 'surveyForm'
})(SurveyForm);