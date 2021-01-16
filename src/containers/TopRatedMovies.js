import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import {fetchTopRatedMovies} from '../store/actions/index';
import MovieList from '../components/Movies/MovieList';
import {isEmpty} from '../helpers/helperFunctions';
import { useDispatch, useSelector } from 'react-redux';
import useDocumentTitle from '../hooks/useDocumentTitle';

const useStyles = makeStyles(theme=>({
  mt1:{
    margin:"1rem auto 0",
  },
  my4:{
    margin:'4rem auto',
  }
}));

const TopRatedMovies = ({movies,categories}) => {
  const classes = useStyles();
  let { topRatedMovies} = useSelector(state => ({
    topRatedMovies: state.movies.topRatedMovies,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const queryString = '/movie/top_rated';
  useDocumentTitle('Top Rated Movies | MOVIESARK');
  useEffect(() => {
    if (isEmpty(topRatedMovies)) {
      dispatch(fetchTopRatedMovies(queryString, currentPage));
    }
  }, []);

  const handlePageChange = (event, page) => {
    if (topRatedMovies.page !== page) {
      topRatedMovies=null;
      setCurrentPage(page);
      dispatch(fetchTopRatedMovies(queryString, page));
    }
  };

  return (
    <Container className={classes.my4}>
      <Typography variant="h3">Top Rated Moives</Typography>
      <Typography variant="h6">Movies {topRatedMovies.total_results}</Typography>
      <Divider></Divider>
      {topRatedMovies ? 
      <MovieList movies={topRatedMovies.results}></MovieList> :
      <MovieList templateCount={12} movies={[]}/>
      }
    <Grid container justify="center" alignItems="center" className={classes.mt1}>
      <Pagination
      count={topRatedMovies.total_pages}
      page={currentPage}
      onChange={handlePageChange}
      boundaryCount={2}
      variant="outlined"
      color="primary"
      ></Pagination>
      </Grid>
    </Container>
  );
};

export default TopRatedMovies;
