import './App.css';
import FinalResult from './components/FinalResult';
import NameComponent from './components/NameComponent';

function App() {
  return (
    <div className="App">
      <NameComponent name='Amar' />
      <FinalResult marks={70} subject='Maths' />
    </div>
  );
}

export default App;
