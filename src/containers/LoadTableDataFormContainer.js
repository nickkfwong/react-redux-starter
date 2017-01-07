import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoadTableTableForm from '../components/LoadTableDataForm';
import { requestData } from '../actions';

const mapStateToProps = (state) => ({
});

// Action creator
const mapDispatchToProps = (dispatch) => ({
    onSubmitForm : (values) => {
        dispatch(requestData({
            param: values,
            data:  [{ ric:'0045.hk', price:500, date:Date()},
                    { ric:'00206.hk', price:500, date:Date()},
                    { ric:'0017.hk', price:500, date:Date()},
                    { ric:'0010.hk', price:500, date:Date()}]
        }))
    },
});

const form = reduxForm({
  form: 'loadTableDataForm',
})(LoadTableTableForm);

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (form)