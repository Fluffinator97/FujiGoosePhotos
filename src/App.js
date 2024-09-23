import './Style.css';
import Banner from './Modules/Banner.js';
import Meny from './Modules/Meny.js';
import Portfolio from './Pages/Portfolio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Meny />
		<Banner />
      </header>
		<Portfolio />
    </div>
  );
}

export default App;
