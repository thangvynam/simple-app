import './App.css';
import SwipeableTextMobileStepper from './Stepper';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          We'd better get going.
        </p>

        {SwipeableTextMobileStepper()}
      </header>
    </div>
  );
}

export default App;
