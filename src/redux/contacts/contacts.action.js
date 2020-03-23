import { contactsActionTypes } from "./contacts.types";

export const changeSearchValue = searchValue => ({
    type: contactsActionTypes.CHANGE_SEARCH_VALUE,
    payload: searchValue
});

export const removeContact = itemToRemove => ({
    type: contactsActionTypes.REMOVE_CONTACT,
    payload: itemToRemove
});

export const addContact = ContactToAdd => ({
    type: contactsActionTypes.ADD_CONTACT,
    payload: ContactToAdd
});

export const addOrRemoveEditModus = (itemToEdit, inputsValues) => ({
    type: contactsActionTypes.ADD_OR_REMOVE_EDIT_MODUS,
    payload: [itemToEdit, inputsValues]
});

export const toggleIsVisibleModal = () => ({
    type: contactsActionTypes.TOOGLE_VISIBLE_MODAL
});