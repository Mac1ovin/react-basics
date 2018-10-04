import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// const Hero = require("create-react-class");

const ImageCounter = function(props) {
  return (
    <div className="image-count">
      <div className="count">{props.count}</div>
      <img height="150px" src={props.imageUrl} onClick={props.onCount} />
    </div>
  );
};

class Hero extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <ImageCounter
          imageUrl={this.props.imageUrl}
          count={this.state.count}
          onCount={this.handleClick}
        />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Hero
      title="React"
      subtitle="Либа для интерфейсов"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
    />
    <Hero
      title="Angular"
      subtitle="Какой-то фреймворк"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"
    />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
