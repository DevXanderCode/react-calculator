import React, { Component } from "react";
import styles from "./App.module.css";

import { Button, ClearButton, Input } from "./components";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.calcWrapper}>
          <Input value={this.state.input}></Input>
          <div className={styles.row}>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className={styles.row}>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>X</Button>
          </div>
          <div className={styles.row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className={styles.row}>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
