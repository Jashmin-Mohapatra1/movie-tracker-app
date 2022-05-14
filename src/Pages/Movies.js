
import axios from 'axios';
import Genres from "../Components/Genres/Genres";
import useGenre from "../hooks/useGenre";
import SingleContent from '../Components/SingleContent/SingleContent';
import CustomPagination from '../Components/Pagination/CustomPagination';
import React, { useState, useEffect } from 'react';
export const api_key = "6ec8eaea73d892934034c3d8b4356794";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1)
  const [content, setContent] = useState ([]);
  const [numOfPages, setNumOfPages] =useState()
  const genreforURL = useGenre(selectedGenres);
   console.log(selectedGenres);
  
  const fetchMovies = async () => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
    );

  //console.log(data.results);
  setContent(data.results);
  setNumOfPages(data.total_pages)

};
 
useEffect(() => {
  window.scroll(0, 0);
 fetchMovies(); 
}, [genreforURL, page]);



  return (
    
    <div>
        <span className="pageTitle"><b>Discover Movies</b></span>
        <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
         <div className="trending">
         {content && 
         content.map((c,i) => ( 
         <SingleContent 
         key={i} 
         id={c.id} 
         poster_path={c.poster_path} 
         title={c.title || c.name} 
         date={c.first_air_date || c.release_date}
         media_type="movie"
         vote_average={c.vote_average}
         />
        ))} 
    </div>
    {numOfPages > 1 &&   (
     <CustomPagination setPage={setPage} numOfPages={numOfPages} />
     )}
     </div>
  );

}

export default Movies;
