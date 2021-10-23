import Header from './components/Header';
import Score from './components/Score';
import Board from './components/Board';
import Footer from './components/Footer';

import './css/App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Score />
        <Board />
        <Footer />
      </div>
    </div>
  );
}

export default App;
