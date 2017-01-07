import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TableForm from  '../components/TableForm';

const Model = [
      { name: 'ric'},
      { name: 'price'},
      { name: 'date'}
]

const mapStateToProps = (state) => ({
    model: Model,
});

// Action creator
const mapDispatchToProps = (dispatch) => ({
    onSubmitForm : (values) => {
        console.log(values);
    },
});

const form = reduxForm({
  form: 'tableFrom',     // a unique identifier for this form
  initialValues: {
    data:[]
}
})(TableForm)

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (form)