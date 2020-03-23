import React from "react";
import "./contacts.styles.scss";

import { Input, Button, Layout } from "antd";

import { connect } from "react-redux";

import ContactsItem from "../../components/contacts-item/contacts-item";

import { changeSearchValue, toggleIsVisibleModal } from "../../redux/contacts/contacts.action.js";

import { toggleIsLogged } from "../../redux/isLogged/isLogged.actions";

import { createStructuredSelector } from "reselect";

import { selectContactsItems, selectSearchValue} from "../../redux/contacts/contacts.selectors";

import AddContactForm from "../../components/addContact-form/addContact-form";

const ContactsPage = ({contactsItems, searchValue, changeSearchValue, toggleIsVisibleModal, toggleIsLogged}) => (
    <div>
        <Layout.Header className="header">
        <Button type="primary" danger className="logOutBtn" onClick={() => toggleIsLogged()}>Log out</Button>
        </Layout.Header>
        <div className="contacts-directory">
            <Button  className="addContactForm" type="primary" onClick={() => toggleIsVisibleModal()}>Добавить контакт</Button>
            <Input.Search style={{ width: 220 }} onChange={e => changeSearchValue(e.target.value)}/>
            <AddContactForm/>
            {
                contactsItems.filter(item => item.name.toLowerCase().includes(searchValue)).map(item => (
                    <ContactsItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    contactsItems: selectContactsItems,
    searchValue: selectSearchValue,
});

const mapDispatchToProps = dispatch => ({
    changeSearchValue: searchValue => dispatch(changeSearchValue(searchValue)),
    toggleIsVisibleModal: () => dispatch(toggleIsVisibleModal()),
    toggleIsLogged: () => dispatch(toggleIsLogged())
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactsPage);