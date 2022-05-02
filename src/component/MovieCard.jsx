import React from "react";

//Since we need to make our movies dynamic, thus we have to use props

//we can pass our props directly as in first layout (commented)
//or apply destructuring using {movie1} passed an argument
//Mind you Year, Poster, Title and Type is from the movie API, we didn't create those objects

// const MovieCard = (props) => {
//   return (
//     <div className="movie">
//       <div>
//         <p>{props.Year}</p>
//       </div>
//       <div>
//         <img
//           src={
//             props.Poster !== "N/A"
//               ? props.Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={props.title}
//         />
//       </div>
//       <div>
//         <span>{props.Type}</span>
//         <h3>{props.Title}</h3>
//       </div>
//     </div>
//   );
// };

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
