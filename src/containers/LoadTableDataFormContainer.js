import { connect } from 'react-redux';
import { reduxForm, initialize } from 'redux-form';
import LoadTableTableForm from '../components/LoadTableDataForm';
import { requestData } from '../actions';

const testData = [
    { ric:'0045.hk', price:500, date:Date()},
    { ric:'00206.hk', price:500, date:Date()},
    { ric:'0017.hk', price:500, date:Date()},
    { ric:'0010.hk', price:500, date:Date()}
];


const mapStateToProps = (state) => ({
});

// Action creator
const mapDispatchToProps = (dispatch) => ({
    onSubmitForm : (values) => {
        dispatch(requestData({
            param: values,
            data:  testData
        }));

        dispatch(initialize('tableFrom', {data: testData}, false))
    },
});

const form = reduxForm({
  form: 'loadTableDataForm',
})(LoadTableTableForm);

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (form)