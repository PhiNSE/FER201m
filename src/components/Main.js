import React, { Component } from 'react'
import { Players } from '../Share/ListOfPlayers'
import PlayerPresentation from './PlayerPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: Players
        };
    }
    render() {
      return <PlayerPresentation Players={this.state.players}/>
    }
  }
  export default Main
  