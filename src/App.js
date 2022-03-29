import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "circle-inner",
  };

  startRotation = () => {
    this.setState({
      name: "circle-inner start-rotate",
    });

    const time = Math.floor(Math.random() * 10000) + 1;
    console.log(
      "Degree of rotation is: ",
      (((360 / 1000) * time) % 360).toFixed(2)
    );
    setTimeout(() => {
      this.setState({
        name: "circle-inner start-rotate stop-rotate",
      });
    }, time);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="wrapperInner">
          <div className="header">
            <div className="headerBlock">
              <img
                src="https://img1.wsimg.com/isteam/ip/688b97a6-101c-4598-884b-91027c085d69/stack%20of%20poker%20chips.png/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:1280"
                alt="coins"
              />
              <p>You have</p>
              <h4>
                800 <small>coins</small>
              </h4>
            </div>
            <div className="headerBlock">
              <img
                src="https://pngimg.com/uploads/dice/dice_PNG49.png"
                alt="dice"
              />
              <h4>10</h4>
              <p>Chances left</p>
            </div>
          </div>
          <div className="circle">
            <div className={this.state.name}>
              <span className="triangle triangle1"></span>
              <span className="triangle triangle2"></span>
              <span className="triangle triangle3"></span>
              <span className="triangle triangle4"></span>
              <span className="triangle triangle5"></span>
              <span className="triangle triangle6"></span>
              <span className="triangle triangle7"></span>
              <span className="triangle triangle8"></span>
              <span className="triangle triangle9"></span>
            </div>
            <span className="btn">
              <span>Play</span>
            </span>
          </div>
          <div className="footer">
            <h5>-100</h5>
            <button className="btnRed" onClick={this.startRotation}>
              Spin
            </button>
            <small>
              Costs <strong>50</strong> coins
            </small>
            <button className="btnWhite">Leave game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
