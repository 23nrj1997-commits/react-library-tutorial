import './index.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlight from './components/Highlights';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlight />
    </div>
  );
}

export default App;
