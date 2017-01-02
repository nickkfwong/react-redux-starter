import React from 'react';
import {Field, reduxForm } from 'redux-form';

const handleFormSubmit = (values) =>{
    console.log('handle form submit');
    console.log(values);
}

const SimpleForm = (props) => {
    const { handleSubmit } = props;
    
    return (
        <div>
            <h1>Simple Form : {props.firstName}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SimpleForm;