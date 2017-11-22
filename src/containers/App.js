import React from "react";
import InputPreview from "../components/InputPreview";
import {connect} from "react-redux";

class App extends React.Component {
  render(){
    const {message} = this.props.messageReducer;
    return (<InputPreview value={message} />);
  }
}

// TODO: check this out
export default connect( state => state)(App);
