import { connect } from 'react-redux';
import MyTable from  '../components/MyTable';

const Model = [
      { name: 'ric'},
      { name: 'price'},
      { name: 'date'}
]

const mapStateToProps = (state) => ({
      model: Model,
      data: state.myTable.data,
});

// This will be mapped to props
const mapDispatchToProps = (dispatch) => ({
    onChange: () => {}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTable);