import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  hello() {
    return 5;
  }
  render() {
    return <h1>hello</h1>;
  }
}

ReactDOM.render(React.CreateElement(App), document.getElementById("root"));
