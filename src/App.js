import './index.css';
import Nav from './components/Nav';
import BookInfo from './pages/BookInfo';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import books from './data';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/1" element={<BookInfo books={books} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
