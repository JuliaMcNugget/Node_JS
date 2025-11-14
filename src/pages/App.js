import CountButton from '../components/CountButton';
import GitHub from '../components/GitHub';
import { Link } from 'react-router-dom';
function App() {

  return (
    <div>
      <CountButton incrementBy={1} buttonColor={"green"}/>
      <CountButton incrementBy={2} buttonColor={"blue"}/>
      <GitHub/>
      <Link to="/store">Real Fake Store</Link>
    </div>
  );
}

export default App;
