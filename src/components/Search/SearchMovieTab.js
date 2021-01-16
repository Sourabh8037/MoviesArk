import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import usePageSaver from '../../hooks/usePageSaver';
import { searchMovies } from '../../store/actions';
import MovieList from '../Movies/MovieList';
import useStyles from '../../common/Styles';
import { Pagination } from '@material-ui/lab';

const SearchMovieTab = ({movies,query}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentPage, setCurrentPage } = usePageSaver();
  const handlePageChange = (event, page) => {
    if (movies.page !== page) {
      movies.results=undefined;
      setCurrentPage(page);
      dispatch(searchMovies(`/search/movie?query=${query}`, page));
    }
  };

  return (
    <Container className={classes.pyTab}>
      <MovieList movies={movies.results} templateCount={20} category="movie"></MovieList>
      <Grid container className={classes.my1} justify="center" alignItems="center">
        <Pagination
      count={movies.total_pages}
      page={currentPage}
      onChange={handlePageChange}
      boundaryCount={2}
      variant="outlined"
      color="primary"
      ></Pagination>
        </Grid>
    </Container>
  )
}

export default SearchMovieTab
