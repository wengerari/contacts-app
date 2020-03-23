import {isLoggedActionTypes} from "./isLogged.types";

export const toggleIsLogged = () => ({
    type: isLoggedActionTypes.TOGGLE_IS_LOGGED,
});