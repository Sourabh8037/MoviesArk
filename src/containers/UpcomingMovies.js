import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import {fetchUpcomingMovies} from '../store/actions/index';
import MovieList from '../components/Movies/MovieList';
import {isEmpty,numberWithCommas} from '../helpers/helperFunctions';
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

const UpcomingMovies = ({movies}) => {
  const classes = useStyles();
  let { upcomingMovies} = useSelector(state => ({
    upcomingMovies: state.movies.upcomingMovies,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const queryString = '/movie/upcoming';
  useDocumentTitle('Upcoming Movies | MOVIESARK');
  useEffect(() => {
    if (isEmpty(upcomingMovies)) {
      dispatch(fetchUpcomingMovies(queryString, currentPage));
    }
  }, []);

  const handlePageChange = (event, page) => {
    if (upcomingMovies.page !== page) {
      upcomingMovies=null;
      setCurrentPage(page);
      dispatch(fetchUpcomingMovies(queryString, page));
    }
  };

  return (
    <Container className={classes.my4}>
      <Typography variant="h3">Upcoming Moives</Typography>
      <Typography variant="h6">Movies {numberWithCommas(upcomingMovies.total_results)}</Typography>
      <Divider></Divider>
      {upcomingMovies ? 
      <MovieList movies={upcomingMovies.results}></MovieList> :
      <MovieList templateCount={12} movies={[]}/>
      }
    <Grid container justify="center" alignItems="center" className={classes.mt1}>
      <Pagination
      count={upcomingMovies.total_pages}
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

export default UpcomingMovies;
