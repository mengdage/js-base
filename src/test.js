/* global React ReactDOM */
const App = () => {
  return React.CreateElement("h1", {}, "hello");
};

ReactDOM.render(React.CreateElement(App), document.getElementById("root"));
