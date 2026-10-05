import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './pages/Books.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
