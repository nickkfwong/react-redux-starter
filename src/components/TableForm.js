import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import { TextField, Checkbox } from 'redux-form-material-ui';
import MyTable from './MyTable';

const Model = [
      { name: 'ric'},
      { name: 'price'},
      { name: 'date'}
]

const renderData = ({ fields }) => (
    <div>
    <table>
        <tbody>
        {
            fields.map((data, rowIdx) =>
                <tr key={rowIdx}>
                    <td key={rowIdx}>
                        <div>
                            <Field key={rowIdx} 
                                name={`${data}.checked`} 
                                component={Checkbox}
                            />
                        </div>
                    </td>
                    {
                            Model.map((col, colIdx) => 
                                <td key={`${rowIdx}_${colIdx}`}>
                                    <Field key={colIdx}
                                        name={`${data}.${col.name}`}
                                        type="text"
                                        component={TextField}
                                        label="`${col.name}`"/>
                                </td>
                        )
                    }
                </tr>
            )
        }
        </tbody>
    </table>
  </div>
)

const FieldArraysForm = (props) => {
  const { handleSubmit, onSubmitForm, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FieldArray name="trades" component={renderData}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default FieldArraysForm;