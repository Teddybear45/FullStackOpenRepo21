import "./App.css";

// modifications

// New Component
const Hello = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

// Component which passes in props
const HelloWithProps = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>
                Second prop email address of {props.name} is {props.email}
            </h2>
        </div>
    );
};

function App() {
    console.log("App.js is running");

    // const variables to hard code prop values
    const hardcodedName = "Sara";
    const hardcodedEmail = "saratester@mail.com";

    // declared variables for App
    const filler_text_generated = "the quick brown fox: this is const";

    return (
        <div className="App">
            <section className="App-first-section">
                <p>filler text default no edit</p>
                <p>{filler_text_generated}</p>
            </section>

            <section className="App-second-section">
                <Hello />
            </section>

            <section className="App-third-section">
                <HelloWithProps name="John" email="johnappleseed@mail.com" />
            </section>

            <section className="App-fourth-section">
                <HelloWithProps name={hardcodedName} email={hardcodedEmail} />
            </section>
        </div>
    );
}

// compiling is handled bu Babel
// every JSX tag needs to be closed

export default App;
