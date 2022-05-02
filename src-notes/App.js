import { useState, useEffect } from "react";
import "./App.css";

//components are to begin with capital letter
//functional component
//functional component can be reference within a react file
//Allowed multiple usage within a react app - reusable
//Props are arguments that you pass to react components and are passed via attributes
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h3>Age: {props.age}</h3>
//     </>
//   );
// };

const App = () => {
  // const name = "John";
  // const isNameShowing = false; //itinerary operations condition ? true : false

  //<></> empty tags useful when writing html tags adjacent to each other: a rule in React that prevent writing tags without it
  // return (
  //   <div className="App">
  //     <h1>Hello, {isNameShowing ? name : "Someone"}</h1>
  //     <Person name="Peter" lastName="Onyegbule" age={26} />

  //   </div>
  // );

  //fallback function doesn't have a name  or input or output command just waits for a command
  //callback function is a function passed as an argument to another function
  //called function performs a defined task then returns the program control back to the application after it's return statement has been executed
  //React State in React is a plain javascript object that represent a piece of information about the current situation of the component and completely managed by the component itself
  //You have import the UseState hook from React
  //any function in React that starts with use is called a HOOK
  //const [nameOfState, SetterFunction] = useStateHOOK [] = array structuring
  //Rule of thumb, you call the name of the state variable and the setter function should have set and Name of the state
  //In the useState(Initial Value)
  //(name of the state) counter is used as normal Javascript variable
  //the setcounter is added via onClick event where it holds an function that carries the previous state of the component (prevNameofState)
  const [counter, setCounter] = useState(0); //array destructuring

  //useEffect -> is function based and use arrow function within. A function that carries another arrow function within itself
  //the function within useEffect is called an effect callback (a callback function with arrow function)
  //what does useEffect do: it allows us to do something on some kind of an effect or event.
  //Basically, it allows me to perform side effects in my component
  //examples of side effects are: fetching data, directly updating the DOM and timers.
  //useEffect accepts two arguments. useEffect(<callback function>, [dependency array]). Dependency array is optional.
  //what does the Dependency array do: when empty, it makes the callback function only run once
  //when it contains a value specifically a state and that state is set to change to another state on the callback function of useEffect, we get infinite loop
  //Best practice: use useEffect to perform side effects in my component based a state change. Whenever the state changes, the function is called

  //RULES OF REACT
  //Never mutate the state
  //Never modify the state manually

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
