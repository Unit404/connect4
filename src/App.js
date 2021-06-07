import './App.css';
import Connect4 from './components/Connect4';

function App() {

  return (
    <div className="App">
     <Connect4 rows={6} cols={7}/>
    </div>
  );
}

export default App;
