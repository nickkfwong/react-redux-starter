import { SimpleFormInitialState } from '../../constants/stateModel/stateModel';

const simpleFormReducers = (state = SimpleFormInitialState , action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default simpleFormReducers;