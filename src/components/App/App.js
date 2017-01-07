import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyTable from '../../containers/MyTableContainer';
import LoadDataForm from '../../containers/LoadTableDataFormContainer';
import TableForm from '../../containers/TableFormContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const App = (props) => (
    <MuiThemeProvider>
        <div>
            <h1>Test</h1>
            <LoadDataForm/>
            <TableForm/>
        </div>
    </MuiThemeProvider>
);

export default App;