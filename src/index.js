import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Hero = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handleClick: function() {
    this.setState({ count: this.state.count + 1 });
  },

  render: function() {
    return (
      <div className="container">
        <div className="count">{this.state.count}</div>
        <img
          height="150px"
          src={this.props.imageUrl}
          onClick={this.handleClick}
        />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Hero
      title="React"
      subtitle="Либа для интерфейсов"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
      count="0"
    />
    <Hero
      title="Angular"
      subtitle="Какой-то фреймворк"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"
      count="0"
    />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
