import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//give the svg a name to reuse

import MovieCard from "./component/MovieCard";

//Movie App
//Get API from omdbapi
//Run the api whenever the site loads = useEffect
//We'll add the [] empty dependency array if we only want it to run at the start
//Asynchronous function are functions that will run later
//Async function run in parallel with other functions
//Async takes some time to run (in our cases time to fetch movies)
//Using the keyword async before a function makes the function return a Promise
//Using the keyword await before a functiom makes the function wait for a Promise
//The await keyword can only be used inside an async function.
//title = movie search term or search title

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b6fb262a";

//Static data just to see what we'll be writing out in JSX
// const movie1 = {
//   Title: "Batman Begins",
//   Year: "2005",
//   imdbID: "tt0372784",
//   Type: "movie",
//   Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// };

//searchMovie uses an async function to fetch the movies from the website with our API but takes search term called title
//Once it fetches it, it takes the data as converts it to json using .json format
//Note the use of await to wait for Promise to fetch data and assign it with json format

//onChange takes a callback function (search-icon)

//Poster Image has a caveat, if the image of the poster is unavailable we've added an itinerary operation to show something else
//<img src={Poster !== "N/A" ? movie.poster : "https://via.placeholder.com/400"}

const App = () => {
  //Earlier we used a static result to assist do the following
  //1 Create the layout in JSX
  //2 Create a new component to display that layout
  //3 Create props using the data available
  //4 Pull in that Component here and pass in Props

  //Now, we'll use State to get and set the state of our moviecard component with the default value of our useState Hook to be an empty array
  //Next we use the setMovies function to pull the data from our search setMovies (data.Search)
  //Mind You, Search is from the API used to represent results of the search, we didn't create it.
  //To display it, we use itinary function to display movies if the length is greater than one and display No movie found if it's not
  //To more than movie or all movies available from the search, we'll be using the map function to map through the array of movies and perform a callback function for each element/movie in the array once (one time)
  //To display all movies, we set the state of the movie state to be data from search data.Search
  //Then we displayed the state {movies} as the first value to show, how since it's an array we need to Map through
  //So we map through movies.map((movies) => (<MoviesCard />))
  //Within the callback function for the map method, we took a single element called movie as an argument and with return value of the function to be the MovieCard component
  //This causes our movies state to render it's state using the MovieCard component layout
  //However, we still need to add the props to the MovieCard component
  //So, we did this movies.map((movies) => (<MoviesCard movies={movie}/>))
  //where movies is the props name which we destructured in the MovieCard component ({movies})
  //and the movie (singular) represent each array element
  //So here, we've just used the map method to apply a function to the movies state which is an array

  //the Map method calls a function for each element in the array
  //syntax: [array.map(function(currentValue, index, arr), thisValue)] where
  //function() represents the function to be run for each array element in the array
  //currentValue represents the value of the current element in the array
  //index, which is OPTIONAL represents the index of the current element in the array
  //arr, which is also OPTIONAL represents the array of the current element in the array
  //thisValue, which is also OPTIONAL represents the default value passed to the function to be used as its this value
  //the Map method's return value is an array based on the function that has been carried out on each array element in the original array

  //the Filter method on the other hand creates a new array filled with elements that passed a test provided by a function
  //unlike Map method, it does not change the original array
  //Filter method only filters elements that passed a test or criteria provided by a function
  //Syntax: [array.filter(function(currentValue, index, arr), thisValue)]

  //we can have multiple useState and useEffect methods per component
  //the data type of our state is what we pass into the useState Hook parameter
  //the data passed into the useState represents the default state of our component
  const [movies, setMovies] = useState([]); //array destructuring

  //Another useState for our search value
  //We'll pass it the string state to value attribute on our search input
  //next we add the setSearchTerm function to the input onChange event, to be whatever we type using the e.target.value
  //Next we make the search term be the title that is searched, we do this by passing it to the searchMovie function
  //onClick={() => searchMovie(searchTerm)}
  const [searchTerm, setSearchTerm] = useState(""); //array destructuring

  //searchMovies function to make a promise to the movie API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    //allows use the object result of our search and it's what is used to help us know the object names from our movie
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
