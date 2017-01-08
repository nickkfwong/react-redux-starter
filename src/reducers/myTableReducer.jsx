import { MyTableInitialState } from '../constants/stateModel';
import { REQUEST_DATA } from '../constants/actionTypes';

const myTableReducer = (state = MyTableInitialState, action) =>
{
    switch(action.type)
    {
        case REQUEST_DATA:
            console.log(action);
            return Object.assign({}, state, {
                data: action.payload.trades
            });
    }
    return state;
}

export default myTableReducer;