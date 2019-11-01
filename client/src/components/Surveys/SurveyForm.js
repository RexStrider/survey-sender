import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    renderFields() {
        return (
            <section>
                <Field type="text" name="title" component={SurveyField} />
            </section>
        );
    }
    render() { 
        return (
            <section>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}
 
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);