import './index.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlight from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
}

export default App;
