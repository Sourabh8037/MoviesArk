import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../common/Styles';
import MovieList from '../components/Movies/MovieList';
import { numberWithCommas } from '../helpers/helperFunctions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import usePageSaver from '../hooks/usePageSaver';
import { fetchGenreCategory } from '../store/actions';

const ViewGenre = (props) => {
  const classes = useStyles();
  const { genreMovies } = useSelector(state => ({
    genreMovies: state.genre.genreMovies,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();
  const query = `/discover/movie?&with_genres=${props.match.params.id}`;


  useDocumentTitle('Genres | MOVIESARK');
  useEffect(() => {
    dispatch(fetchGenreCategory(query, currentPage));
  }, []);

  const handlePageChange = (event, page) => {
    if (genreMovies.page !== page) {
      setCurrentPage(page);
      dispatch(fetchGenreCategory(query, page));
    }
  };
  return (
    <Container className={classes.py4}>
      <Typography variant="h4">{props.match.params.genre.split(' ')[0].toUpperCase().replace('-', ' ')}</Typography>
      <Typography variant="h6">{numberWithCommas(genreMovies.total_results)} Movies</Typography>
      <Divider className={classes.mt1}></Divider>
      <MovieList 
      category="movie"
      movies={genreMovies.results}
      templateCount={10}
      ></MovieList>
    <Grid container justify="center" alignItems="center" className={classes.mt1}>
      <Pagination
      count={genreMovies.total_pages}
      page={currentPage}
      onChange={handlePageChange}
      boundaryCount={2}
      variant="outlined"
      color="primary"
      className={classes.my2}
      ></Pagination>
      </Grid>
    </Container>
  )
}

export default ViewGenre
