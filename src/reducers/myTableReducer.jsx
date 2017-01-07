import { TableInitialState } from '../constants/stateModel';
import { REQUEST_DATA } from '../constants/actionTypes';

const myTableReducer = (state = TableInitialState, action) =>
{
    switch(action.type)
    {
        case REQUEST_DATA:
            console.log(action);
            return Object.assign({}, state, {
                data: action.payload.data
            });
    }
    return state;
}

export default myTableReducer;