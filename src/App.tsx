import './App.css';
import Name from './components/snippets/Name';
import ThemeBulb from './components/snippets/ThemeBulb';

function App() {
  return (
    <div className="App">
      <ThemeBulb/>
      
      <header className="App-header">
        <Name />
      </header>
    </div>
  );
}

export default App;
