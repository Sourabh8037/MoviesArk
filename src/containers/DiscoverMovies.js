import { Container, Divider, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import useDidMount from '../hooks/useDidMount';
import useDocumentTitle from '../hooks/useDocumentTitle';
import usePageSaver from '../hooks/usePageSaver';
import {numberWithCommas, isEmpty} from '../helpers/helperFunctions';
import useStyles from '../common/Styles';
import MovieList from '../components/Movies/MovieList';
import Filter from '../components/Movies/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDiscoverMovies} from '../store/actions/index'; 
import { Pagination } from '@material-ui/lab';

const DiscoverMovies = (props) => {
  const classes = useStyles();
  let {
    discoverMovies,
    filter,
  } = useSelector((state) => ({
    discoverMovies: state.movies.discoverMovies,
    filter: state.filters,
  }));

  const { currentPage, setCurrentPage } = usePageSaver();
  const query = '/discover/movie?';
  const dispatch = useDispatch();

  useDocumentTitle('Discover Movies | MOVIESARK');

  useEffect(() => {
      dispatch(fetchDiscoverMovies(`${query}${filter.discover.query}`, currentPage));
  }, [filter.discover.query]);

  const handlePageChange = (event, page) => {
    if (discoverMovies.page !== page) {
      discoverMovies=null;
      setCurrentPage(page);
      dispatch(fetchDiscoverMovies(query, page));
    }
  };

  return (
    <Container className={classes.py4}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={5}>
          <Typography variant="h4" className={classes.my1}>Discover Movies</Typography>
          <Typography variant="h6">{numberWithCommas(discoverMovies.total_results)} Movies</Typography>
        </Grid>
        <Grid item xs={5} className={classes.my1}>
        {discoverMovies.results && (
          <Filter
            filterCategory="discover"
            filterData={filter.discover}
          />
        )}
        </Grid>
        <Divider className={classes.my1}></Divider>
        <MovieList
        movies={discoverMovies.results}
        templateCount={12}
        ></MovieList>
        <Grid container className={classes.my1} justify="center" alignItems="center">
        <Pagination
      count={discoverMovies.total_pages}
      page={currentPage}
      onChange={handlePageChange}
      boundaryCount={2}
      variant="outlined"
      color="primary"
      ></Pagination>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default DiscoverMovies
