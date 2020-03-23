import React from "react";

import { connect } from "react-redux";

import { addContact, toggleIsVisibleModal } from "../../redux/contacts/contacts.action";

import { Modal, Input } from "antd";

import { selectIsVisibleModal } from "../../redux/contacts/contacts.selectors";

import { createStructuredSelector } from "reselect";

class AddContactForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            phoneNumber: ""
        }
    }

    handleOk = () => {
        this.props.toggleIsVisibleModal();
        this.props.addContact(this.state);
    }

    handleCancel = () => {
        this.props.toggleIsVisibleModal();
    }

    handleChange = e => {
        e.preventDefault();
        const {name,value} = e.target;
        this.setState({[name]: value});
    }


    render(){
        const {isVisibleModal} = this.props;
        return(
            <Modal visible={isVisibleModal} onOk={this.handleOk} onCancel={this.handleCancel}>
                <h4>Введите данные нового контакта</h4>
                <Input addonBefore="имя"  name="name" value={this.state.name} onChange={this.handleChange} />
                <Input addonBefore="телефон"  name="phoneNumber"  value={this.state.phoneNumber} onChange={this.handleChange} />
            </Modal>
)}
}


const mapStateToProps = createStructuredSelector({
    isVisibleModal: selectIsVisibleModal
});

const mapDispatchToProps = dispatch => ({
    addContact: contactToAdd => dispatch(addContact(contactToAdd)),
    toggleIsVisibleModal: () => dispatch(toggleIsVisibleModal())
})



export default connect(mapStateToProps,mapDispatchToProps)(AddContactForm);