import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
    return (
        <section>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px" }} />
            <section className="red-text" style={{ marginBottom: "20px" }}>
                {touched && error}
            </section>
        </section>
    );
}