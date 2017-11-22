import React from "react";

export default class InputPreview extends React.Component {
  onChange = (e) => {
    this.props.onChange( e.target.value);
  };
  render(){
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.onChange} />
      </div>
    );
  }
};
