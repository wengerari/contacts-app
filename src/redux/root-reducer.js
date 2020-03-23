import { combineReducers } from "redux";
import isloggedReducer from "./isLogged/isLogged.reducer";

import contactsReducer from "./contacts/contacts.reducer";

export const rootReducer = combineReducers({
    user: isloggedReducer,
    contacts: contactsReducer
});