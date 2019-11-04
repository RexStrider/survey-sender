import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
        return (
            <section key={name}>
                <label>{label}</label>
                <section>{formValues[name]}</section>
            </section>
        );
    });

    return (
        <section>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className='yellow darken-3 btn-flat' onClick={onCancel} >
                Back
            </button>
        </section>
    );
};

function mapStateToProps(state) {
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);