export const removeContactFn = (contactsItems, itemToRemove) => {
    return contactsItems.filter(item => item.id!=itemToRemove.id);
};

export const addContactFn = (contactsItems, itemToAdd) => {
    return [...contactsItems,{...itemToAdd, id: Date.now().toString()}];
}

export const addOrRemoveEditModusFn = (contactsItems, itemToEdit, inputsValues) => {
    return contactsItems.map(item => {
        if(item.id === itemToEdit.id) {
           if(!item.editModus){
                return {...item,editModus : true};
            }
            else{
                return {...item,editModus : false, name: inputsValues.name, phoneNumber: inputsValues.phoneNumber};
            }
        }  
        else{
            return item;
        } 
    });
}