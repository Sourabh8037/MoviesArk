import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import {fetchTrendingMovies} from '../store/actions/index';
import MovieList from '../components/Movies/MovieList';
import {isEmpty,numberWithCommas} from '../helpers/helperFunctions';
import { useDispatch, useSelector } from 'react-redux';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useStyles from '../common/Styles';

const TrendingMovies = ({movies}) => {
  const classes = useStyles();
  let { trendingMovies} = useSelector(state => ({
    trendingMovies: state.movies.trendingMovies,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const query = '/trending/all/day';

  useDocumentTitle('Trending Movies | MOVIESARK');
  useEffect(() => {
    if (isEmpty(trendingMovies)) {
      dispatch(fetchTrendingMovies(query, currentPage));
    }
  }, []);

  const handlePageChange = (event, page) => {
    if (trendingMovies.page !== page) {
      trendingMovies=null;
      setCurrentPage(page);
      dispatch(fetchTrendingMovies(query, page));
    }
  };

  return (
    <Container className={classes.py4}>
      <Typography variant="h4">Trending Moives</Typography>
      <Typography variant="h6">Movies {numberWithCommas(trendingMovies.total_results)}</Typography>
      <Divider className={classes.mt1}></Divider>
      {trendingMovies ? 
      <MovieList templateCount={12} movies={trendingMovies.results}></MovieList> :
      <MovieList templateCount={12} movies={[]}/>
      }
    <Grid container justify="center" alignItems="center" className={classes.mt1}>
      <Pagination
      count={trendingMovies.total_pages}
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

export default TrendingMovies;
