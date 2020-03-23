import React from "react";
import './App.css';

import { Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import ContactsPage from "./pages/contacts/contacts.component";

import {connect} from "react-redux";

import { selectIsLogged } from "./redux/isLogged/isLogged.selectors";

import { createStructuredSelector } from "reselect";

class App extends React.Component{
 
  render() {
    const {isLogged} = this.props;
    return( 
    <div>
      <Route exact path="/" render={() => isLogged ? (<Redirect to="/contacts" />) : (<HomePage />)}/>
      <Route exact path="/contacts" render={() => !isLogged ? (<Redirect to="/" />) : (<ContactsPage />)} />
     
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged
});


export default connect(mapStateToProps)(App);
