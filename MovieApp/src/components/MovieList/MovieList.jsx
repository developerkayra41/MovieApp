import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../redux/slices/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import Loading from '../Loading/Loading'
const MovieList = () => {
  const dispatch = useDispatch()

  const { movieList, status, error } = useSelector((store) => store.movieList)

  useEffect(() => {
    dispatch(getMovieList())
  }, [])

  return (
    <div className='Movie-List'>
      <ul>
        {
          status === 'fulfilled' ?
            movieList && movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            )) : status === 'pending' ? <Loading /> : <p>{error}</p>
        }
      </ul>

    </div>
  )
}

export default MovieList