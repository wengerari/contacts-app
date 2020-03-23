
import { contactsActionTypes } from "./contacts.types";

import { removeContactFn, addContactFn, addOrRemoveEditModusFn } from "./contacts.utils";


const INITIAL_STATE = {
    contactsItems: [
        {
            id: 1,
            name: "James Maxwell",
            phoneNumber: 7437943,
        },
        {
            id: 2,
            name: "Gottfried Leibniz",
            phoneNumber: 543634
        },
        {
            id: 3,
            name: "Blaise Pascal",
            phoneNumber: 142554
        },
        {
            id: 4,
            name: "Joseph Lagrange",
            phoneNumber: 7574683
        }
    ],
    searchValue: "",
    isVisibleModal: false
};

const contactsReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case contactsActionTypes.CHANGE_SEARCH_VALUE:
            return{
                ...state,
                searchValue: action.payload
            }
        case contactsActionTypes.REMOVE_CONTACT:
            return{
                ...state,
                contactsItems: removeContactFn(state.contactsItems,action.payload)
            }
        case contactsActionTypes.ADD_CONTACT:
            return{
                ...state,
                contactsItems: addContactFn(state.contactsItems,action.payload)
            }
        case contactsActionTypes.ADD_OR_REMOVE_EDIT_MODUS:
            return{
                ...state,
                contactsItems: addOrRemoveEditModusFn(state.contactsItems,action.payload[0],action.payload[1])
            }
        case contactsActionTypes.TOOGLE_VISIBLE_MODAL:
            return{
                ...state,
                isVisibleModal: !state.isVisibleModal
            }
        default:
            return state;
    }    
}

export default contactsReducer;