import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    {label: "Survey Title", name: "title", noValueError: "provide a survey name"},
    {label: "Subject Line", name: "subject", noValueError: "provide a subject line"},
    {label: "Email Body", name: "body", noValueError: "provide an email body"},
    {label: "Recipient List", name: "emails", noValueError: "provide one or more email addresses"}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field
                key={name}
                component={SurveyField}
                type="text"
                label={label}
                name={name} />
            );
        });
    }
    render() { 
        return (
            <section>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" type="submit" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </section>
        );
    }
}

function validate(values) {
    const errors={};

    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name]=`You must ${noValueError}`;
        }
    });

    return errors;
}
 
export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);