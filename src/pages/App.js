import logo from './logo.svg';
import './App.css';
import CountButton from '../components/CountButton';

function App() {
  return (
    <div>
      <CountButton incrementBy={1}/>
      <CountButton incrementBy={2}/>
    </div>
    
  );
}

export default App;
