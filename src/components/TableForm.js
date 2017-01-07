import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui';
import MyTable from './MyTable';

const Model = [
      { name: 'ric'},
      { name: 'price'},
      { name: 'date'}
]

const renderData = ({ fields }) => (
    <div>
        {
            fields.map((data, index) =>
                <table>
                    <tbody>
                        <tr key={index}>
                            {
                                Model.map((col, colIdx) => 
                                        <td>
                                            <Field key={colIdx}
                                                name={`${data}.${col.name}`}
                                                type="text"
                                                component={TextField}
                                                label="`${col.name}`"/>
                                        </td>
                                )
                            }
                        </tr>
                    </tbody>
                </table>
            )
        }
  </div>
)

const FieldArraysForm = (props) => {
  const { handleSubmit, onSubmitForm, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FieldArray name="data" component={renderData}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default FieldArraysForm;