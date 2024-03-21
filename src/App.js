
 import React from 'react';
 import {useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
 

 const API_URL='https://www.omdbapi.com?apikey=52662682';


 const App=()=>{
  const [movies,setMovies]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  const searchMovies=async(title)=>{
    const response=await fetch (`${API_URL}&s=${title}`);
    const data =await response.json();

     setMovies(data.Search);
  };

  const handleSearchClick = () => {
    searchMovies(searchTerm);
  };

  return (
     <div className="App">
     <h1>MovieLand</h1>

     <div className="search">
      <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />

      <img
        src={SearchIcon}
        alt="search"
        onClick={handleSearchClick} 
         />
     </div>
     {movies?.length>0?(
      <div className="container">
        {
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        }
      </div>):(
        <div className="empty">
          <h2>No movies found.</h2>
          </div>
     )}
     </div >
  )
 }
 

export default App;

 
