import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SimpleForm from '../../components/Form/SimpleForm';

const mapStateToProps = (state) =>{
    
    console.log('mapstate', state);
    return { 
        firstName: state.getIn(['form']).simpleForm.firstName,
        lastName: state.getIn(['form']).simpleForm.lastName
    }
}

const mapDispatchToProps = (dispatch) => ({
    // do nothing
});

const simpleForm = reduxForm({
    form: 'simpleForm',
    fields: ['firstName', 'lastName']
})(SimpleForm)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(simpleForm);