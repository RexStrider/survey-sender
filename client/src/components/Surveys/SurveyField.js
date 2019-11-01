import React from 'react';

export default ({ input, label }) => {
    return (
        <section>
            <label>{label}</label>
            <input {...input} />
        </section>
    );
}