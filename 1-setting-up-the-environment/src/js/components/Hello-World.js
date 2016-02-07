import React from "react";

export default class Footer extends React.Component {
  render() {
    let msg = "Extra Message from React"
    return (
      <div>
        <div>Hello World!</div>
        <div>{msg}</div>
      </div>
    );
  }
}
