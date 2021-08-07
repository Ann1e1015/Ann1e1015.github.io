// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/index'
import Content from './components/content/index'

function App() {
  var doc = document.documentElement
  console.log(doc)
  const rszcal = function () {
        var clientwidth = doc.clientWidth;
        if (!clientwidth) return;
        doc.style.fontSize = clientwidth >= 1080 ? 1080 / 3.6 + 'px' : clientwidth / 3.6 + 'px';
  }
  rszcal()
  window.addEventListener('resize', rszcal, false);

  return (
    <div className="App">
      <Header />
      <Content />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
