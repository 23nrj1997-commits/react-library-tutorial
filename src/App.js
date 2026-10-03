import './index.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlight from './components/Highlights';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlight />
      <Featured />
    </div>
  );
}

export default App;
