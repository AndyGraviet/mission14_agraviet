import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/Movie';

export default function MovieList() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const fetchMovies = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setAllMovies(temp);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-3 gap-4">
        {allMovies.map((movie) => (
          <MovieCard
            category={movie.category}
            title={movie.title}
            year={Number(movie.year)}
            director={movie.director}
            rating={movie.rating}
            edited={movie.edited}
            lentTo={movie.lentTo}
            notes={movie.notes}
          />
        ))}
      </div>
    </div>
  );
}
