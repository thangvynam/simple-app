import logo from './logo.svg';
import './App.css';
import SwipeableTextMobileStepper from './Stepper';

function App() {
  return (
    
    <div classN
    ame="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello everyone, This is simple-app
        </p>

        {SwipeableTextMobileStepper()}
      </header>
    </div>
  );
}

export default App;
