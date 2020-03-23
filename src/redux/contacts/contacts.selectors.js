import { createSelector } from "reselect";

const selectContacts = state => state.contacts;



export const selectContactsItems = createSelector(
    [selectContacts],
    contacts => contacts.contactsItems
);

export const selectSearchValue = createSelector(
    [selectContacts],
    contacts => contacts.searchValue
);

export const selectIsVisibleModal = createSelector(
    [selectContacts],
    contacts => contacts.isVisibleModal
);