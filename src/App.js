import Navbar from './components/Navbar/Navbar';
import './App.css';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="logo.png" alt="logo" className='logo'/>
        <Navbar/>
      </div>
      <Body/>
    </div>
  );
}

export default App;
