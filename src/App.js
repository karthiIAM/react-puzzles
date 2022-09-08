import React, { Component } from 'react';
import './style.css';
import Increment from './Increment';
export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  Incremental = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <button
          onClick={() => {
            <img
              src={`https://robohash.org/${this.state.count}?set=set2&size=180x180`}
            />;
          }}
        >
          image
        </button>

        {this.state.count}
        <Increment increment={this.Incremental} />
        {/* <button onClick={this.Incremental} /> */}
      </div>
    );
  }
}
