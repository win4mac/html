import React from "react";
import ReactDOM from "react-dom";

class MyCoolButton extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

class HelloMessage extends React.Component {
  test() {
    console.log("TEST CLICK");
  }
  render() {
    return (
      <div>
        Привет, {this.props.name}
        <div>
          <MyCoolButton label="Button Text" onClick={this.test} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Абабабгаламага" />,
  document.querySelector(".hello-example")
);
