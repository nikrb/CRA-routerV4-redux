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

// Inject dispatch and every field in the global state
// Don’t do this! It kills any performance optimizations because TodoApp will
// rerender after every state change.
// It’s better to have more granular connect() on several components in your
// view hierarchy that each only listen to a relevant slice of the state.
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
export default connect( state => state)(App);
