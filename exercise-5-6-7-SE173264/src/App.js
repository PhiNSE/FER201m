import './App.css';
import index from './index';
import Navigation from './components/Navigation';
import Player from './components/Player';
import Footer from './components/Footer';
// function App() {
//   return (
//     <div className='App'>
//       <Navigation/>
//     </div>
//   );
// }
function App() {
  return (

    <div className='App'>
      <Navigation/>
       <Player/>
       <Footer/>
    </div>
  );
}

export default App;
