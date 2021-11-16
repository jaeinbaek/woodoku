import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';

import './css/App.css';
import './css/Board.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Board />
        <Footer />
      </div>
    </div>
  );
}

export default App;
