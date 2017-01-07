const tableFormReducer = (state, action) =>
{
    console.log('tableFormReducer', state);
    console.log('tableFormReducer', action);
    switch(action.type)
    {
        default:
            return state;
    }
    return state;
}

export default tableFormReducer;