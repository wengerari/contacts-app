import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectIsLogged = createSelector(
    [selectUser],
    user => user.isLogged
);
