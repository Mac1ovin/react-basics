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

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.heroes.map(function(hero) {
          return (
            <Hero
              key={hero.id}
              title={hero.title}
              subtitle={hero.subtitle}
              imageUrl={hero.imageUrl}
            />
          );
        })}
      </div>
    );
  }
}

const data = [
  {
    id: 1,
    title: "React",
    subtitle: "Либа для интерфейсов",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
  },
  {
    id: 2,
    title: "Angular",
    subtitle: "Какой-то фреймворк",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"
  },
  {
    id: 3,
    title: "Ember",
    subtitle: "амбициозный фреймворк",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.png"
  },
  {
    id: 4,
    title: "Vue",
    subtitle: "Прогрессивный фреймворк",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
  }
];

ReactDOM.render(<App heroes="{data}" />, document.getElementById("root"));
registerServiceWorker();
