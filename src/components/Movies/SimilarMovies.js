import { Container, Typography } from '@material-ui/core'
import React from 'react'
import MovieList from './MovieList';

const SimilarMovies = ({movies,category}) => {
  return (
    <React.Fragment>
      <Container>
      <Typography variant="h4">Similar {category=='movie'? "Movies":"Tv Shows"}</Typography>
      <MovieList 
      movies={movies}
      category={category}
      ></MovieList>
      </Container>
    </React.Fragment>
  )
}

export default SimilarMovies
