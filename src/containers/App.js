import React from "react";
import InputPreview from "../components/InputPreview";
import {connect} from "react-redux";
import {setMessage} from "../actions/message";
import {Link} from "react-router-dom";

class App extends React.Component {
  onChange = (value) => {
    this.props.dispatch( setMessage( value));
  };
  render(){
    const {message} = this.props.messageReducer;
    return (
      <div>
        <InputPreview value={message} onChange={this.onChange} />
        <Link to="/about">
          <button>Go About</button>
        </Link>
      </div>
    );
  }
}

// TODO: check this out
export default connect( state => state)(App);
