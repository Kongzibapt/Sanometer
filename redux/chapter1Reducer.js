const initialState = [
    {
        id : 1,
        name : "firstname",
        value : ""
    },
    {
        id : 2,
        name : "lastname",
        value : ""
    }
];


const changeValue = (state,action) => {
    return {
        // We need to make a copy of the old parameters array
        state: state.map(param => {
            // If this isn't the todo item we're looking for, leave it alone
            if (param.name !== action.payload.name) {
                return param
            }

            // We've found the param that has to change. Return a copy:
            console.log(param);
            return {
                id : param.id,
                name : param.name,
                value: action.payload.value
            }
            
        })
    }
}


function chapter1Reducer (state = initialState,action) {
    switch (action.type){
        case "SET_FIRSTNAME":
            console.log("setFirstname");
            changeValue(state,action);
            
        case "SET_LASTNAME":
            changeValue(state,action);
        default :
            return state;
    }
}

export default chapter1Reducer;