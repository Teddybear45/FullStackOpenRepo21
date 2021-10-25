import "./App.css";

// modifications
const Hello = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

function App() {
    console.log("App.js is running");

    // declared variables for App
    const filler_text_generated = "the quick brown fox: this is const";

    return (
        <div className="App">
            {/* <header className="App-header">
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
            <section className="App-first-section">
                <p>filler text default no edit</p>
                <p>{filler_text_generated}</p>
            </section>
        </div>
    );
}

// compiling is handled bu Babel
// every JSX tag needs to be closed

export default App;
