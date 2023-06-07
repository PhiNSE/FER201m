import './App.css';
import index from './index';
import Navigation from './components/Navigation';
import Main from './components/Main';
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
      <Main/>
       <Footer/>
    </div>
  );
}

export default App;
