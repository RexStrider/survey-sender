import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
    return (
        <section>
            <h5>Please confirm your entries</h5>
            <button className='yellow darken-3 btn-flat' onClick={onCancel} >
                Back
            </button>
        </section>
    );
};

function mapStateToProps(state) {
    return( state.form.surveyForm.values );
}

export default connect(mapStateToProps)(SurveyFormReview);