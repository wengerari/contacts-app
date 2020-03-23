import React from "react";
import "./contacts-item.styles.scss";

import { removeContact, addOrRemoveEditModus } from "../../redux/contacts/contacts.action";

import { Input } from "antd";

import { connect } from "react-redux";

class ContactsItem extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: props.item.name,
            phoneNumber: props.item.phoneNumber
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    
    render(){
    const {item, removeContact, addOrRemoveEditModus} = this.props;
    const {name, phoneNumber, editModus} = item;
        return (
        <div className="item-container">
            {
                !editModus
                ?
                (
                    <div className="item__data">
                        <div className="item__data_name">{name}</div>
                        <div className="item__data_phoneNumber">{phoneNumber}</div>
                    </div>
                )
                :
                (
                    <div className="item__data">
                        <div className="item__data_name">
                            <Input autoFocus type="text" name="name" defaultValue={name} onChange={this.handleChange} onKeyPress={e=> {
                                    if(e.key==="Enter"){
                                    addOrRemoveEditModus(item, this.state)}
                                } 
                            } /> 
                        </div>
                        <div className="item__data_phoneNumber">
                            <Input type="text" name="phoneNumber" defaultValue={phoneNumber} onChange={this.handleChange} onKeyPress={e=> {
                                    if(e.key==="Enter"){
                                    addOrRemoveEditModus(item, this.state)}
                                } 
                            } />
                        </div>
                    </div>
                )

            }
            <div className="addBtn" onClick={() => addOrRemoveEditModus(item, this.state)}>&#9998;</div>
            <div className="removeBtn" onClick={() => removeContact(item)}>&#10008;</div>
        </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    removeContact: itemToRemove => dispatch(removeContact(itemToRemove)),
    addOrRemoveEditModus: (itemToEdit, inputsValues) => dispatch(addOrRemoveEditModus(itemToEdit, inputsValues))
});


export default connect(null,mapDispatchToProps)(ContactsItem);