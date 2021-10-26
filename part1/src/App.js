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

//JSX components' first letter must be capitalized

//testing array of React components returned by function
const HelloArray = (props) => {
    return [
        <h2>Greeting</h2>,
        // greet the user with prop name
        <h1>Hello {props.name} this is from the array</h1>,
        <HelloWithProps name={props.name} email="ComponentssArray@mail.com" />,
    ];
};

//duplicate of HelloArray except with a fragment
const HelloArrayFragment = (props) => {
    return (
        <>
            <h2>Greeting</h2>
            <h1>Hello {props.name} this is from the array with a fragment</h1>
            <HelloWithProps
                name={props.name}
                email="ComponentsArray@mail.com "
            />
        </>
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
            {/* passed in hardcoded variable from function */}
            <section className="App-first-section">
                <p>filler text default no edit</p>
                <p>{filler_text_generated}</p>
            </section>

            {/* jsx component */}
            <section className="App-second-section">
                <Hello />
            </section>

            {/* tests props passed into jsx component */}
            <section className="App-third-section">
                <HelloWithProps name="John" email="johnappleseed@mail.com" />
            </section>

            {/* tests hardcoded passed in props */}
            <section className="App-fourth-section">
                <HelloWithProps name={hardcodedName} email={hardcodedEmail} />
            </section>
            {/* tests HelloArray which consists of an array of components including the previous HelloWithProps */}
            <section className="App-fifth-section">
                <HelloArray name="Tiffany" />
            </section>
            {/* tests HelloArrayFragment which contains HelloArray contained inside of a fragment */}
            {/* note that fragments useful to remove dom clutter when is the root element */}
            <section className="App-sixth-section">
                <HelloArrayFragment name="Tiffany2.0" />
            </section>
        </div>
    );
}

// compiling is handled bu Babel
// every JSX tag needs to be closed

export default App;
