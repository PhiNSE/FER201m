import React, { Component } from "react";
export default class Player extends Component {
  render() {
    return (
      <div className="container">
        <div className="column">
          <div className="card">
            <img src="./assets/images/cr.jpg" />
            <h3>cristiano ronaldo</h3>
            <p className="title">manchester united</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="./assets/images/kante.jpg" />
            <h3>Kante</h3>
            <p className="title">manchester united</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="./assets/images/messi.jpg" />
            <h3>messi</h3>
            <p classname="title">psg</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="./assets/images/neymar.jpg" />
            <h3>neymar</h3>
            <p className="title">psg</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="./assets/images/kane.jpg" />
            <h3>kane</h3>
            <p className="title">tottenham</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="./assets/images/haaland.jpg" />
            <h3>haaland</h3>
            <p classname="title">Manchester City</p>
            <p>
              <button>detail</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
