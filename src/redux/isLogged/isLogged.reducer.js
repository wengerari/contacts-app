import { isLoggedActionTypes } from "./isLogged.types";


const INITIAL_STATE = {
    isLogged: false
};

const userReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case isLoggedActionTypes.TOGGLE_IS_LOGGED:
            return {
                ...state,
                isLogged: !state.isLogged
            };
            default: 
                return  state;
    }
};

export default userReducer;