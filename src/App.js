import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieListheading from './MovieListheading';
import MovieList from './MovieList';
import SearchBox from './SearchBox';


function App() {
  const [movies, SetMovies]= useState([]);
  const [searchValue, setSearchValue] = useState('');
 
  const getMovieRequest = async ()=>{
    
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=61e9390b`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("call", responseJson.Search);
        if(responseJson.Search)
        {
            SetMovies(responseJson.Search);
        }
      }

  
useEffect(()=>{
  getMovieRequest();
},[searchValue]);

  return (
    
   <div className='container-fluid  movie-app d-flex align-items-center w-100'>

    <div className='row'>
        <MovieListheading heading='Movies' />
     </div >

    <div className='row d-flex align-items-center mt-4 mb-4'>
        <SearchBox setSearchValue={setSearchValue} getMovieRequest={getMovieRequest} />
    </div>
    

     <div className='row d-flex align-items-center mt-4 mb-4'>
      
     </div>
     <div className='row'>
        <MovieList  movies = {movies}/>
     </div>
     </div>
  );
  
}






export default App;
