import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
    render() { 
        return (
            <section>
                <h2>Survey Form</h2>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    <Field type="text" name="surveyTitle" component="input" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}
 
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);