import React, { Component } from "react";
// import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";

export default function PlayerPresentation({Players}) {
  console.log({Players});
  const [player, setPlayer] = useState([]);
  return (
    <div className="container">
    {Players.map((player) => (
      <div className="column">
        <div key={player.id} className="card">
          <img src={player.img} />
          <h3>{player.name}</h3>
          <p className="title">{player.club}</p>
          <p>
            <button onClick={() => {setPlayer(player);}}>
              <a href="#popup1" id="openPopUp">Detail</a>
            </button>
          </p>
        </div>
      </div>
    ))}
    <div id="popup1" className="overlay">
      <div class="popup">
        <img src={player.img} />
        <h2>{player.name}</h2>
        <a className="close" href="#">
          &times;
        </a>
        <div className="content">{player.info}</div>
      </div>
    </div>
  </div>

  );
}

// export default class Player extends Component {
//   render() {
//     return (
//       <div className="container">
//         {Players.map((player)=>(
//            <div className='column'>
//            <div className='card'>
//            <img src={player.img}/>
//              <h3>{player.name}</h3>
//              <p className='title'>{player.club}</p>
//              <p><button>Detail</button></p>
//            </div>
//          </div>
//         ))}
//       </div>

// <div className="container">
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/cr.jpg" />
//       <h3>cristiano ronaldo</h3>
//       <p className="title">manchester united</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/kante.jpg" />
//       <h3>Kante</h3>
//       <p className="title">manchester united</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/messi.jpg" />
//       <h3>messi</h3>
//       <p classname="title">psg</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/neymar.jpg" />
//       <h3>neymar</h3>
//       <p className="title">psg</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/kane.jpg" />
//       <h3>kane</h3>
//       <p className="title">tottenham</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
//   <div className="column">
//     <div className="card">
//       <img src="./assets/images/haaland.jpg" />
//       <h3>haaland</h3>
//       <p classname="title">Manchester City</p>
//       <p>
//         <button>detail</button>
//       </p>
//     </div>
//   </div>
// </div>
//     );
//   }
// }
