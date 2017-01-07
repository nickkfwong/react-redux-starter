import React from 'react';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { DatePicker, SelectField } from 'redux-form-material-ui';

let DateTimeFormat = global.Intl.DateTimeFormat;

const LoadTableTableForm = (props) => {
  
  const { handleSubmit, onSubmitForm, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label>Date</label>
        <div>
          <Field name="date"
            component={DatePicker}
            format={null}
            onChange={(value) => {
              console.log('date changed ', value) // eslint-disable-line no-console
            }}
            floatingLabelText="Date"
            hintText="Select a date"
            container="inline" 
            mode="landscape"
            formatDate={new DateTimeFormat('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format}
            />
        </div>
        <div>
          <Field
              name="product"
              component={SelectField}
              floatingLabelText="Product Type"
              hintText="Select a Product Type"
              >
              <MenuItem value="ABC" primaryText="ABC"/>
              <MenuItem value="DEC" primaryText="DEC"/>
              <MenuItem value="DDD" primaryText="DDD"/>
          </Field>
        </div>
      </div>
      <div>
        <RaisedButton label="Submit" primary={true} type="submit" disabled={pristine || submitting} />
      </div>
    </form>
  )
}

export default LoadTableTableForm;