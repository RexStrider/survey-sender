import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
    return (
        <section>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </section>
    );
}