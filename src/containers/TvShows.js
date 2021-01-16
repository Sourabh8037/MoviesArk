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
import {fetchTvShows} from '../store/actions/index'; 
import { Pagination } from '@material-ui/lab';

const TvShows = (props) => {
  const classes = useStyles();
  let { tvShows, filter } = useSelector(state => ({
    tvShows: state.movies.tvShows,
    filter: state.filters,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();
  const didMount = useDidMount();
  const query = '/discover/tv?language=en-US';

  useDocumentTitle('TV Shows | MOVIESARK');
  useEffect(() => {
      console.log(filter.tv.query);
      dispatch(fetchTvShows(`${query}${filter.tv.query}`, currentPage));
  }, [filter.tv.query]);


  const handlePageChange = (event, page) => {
    if (tvShows.page !== page) {
      tvShows=null;
      setCurrentPage(page);
      dispatch(fetchTvShows(query, page));
    }
  };

  return (
    <Container className={classes.py4}>
      <Grid container justify="space-between">
        <Grid item xs={7}>
          <Typography variant="h4" className={classes.my1}>TV Shows</Typography>
          <Typography variant="h6">{numberWithCommas(tvShows.total_results)} TV Shows</Typography>
        </Grid>
        <Grid item xs={5} className={classes.my1}>
        {tvShows.results && (
          <Filter
            filterCategory="tv"
            filterData={filter.tv}
          />
        )}
        </Grid>
        <Divider className={classes.my1}></Divider>
        <MovieList
        category="tv"
        movies={tvShows.results}
        templateCount={12}
        ></MovieList>
        <Grid container className={classes.my1} justify="center" alignItems="center">
        <Pagination
      count={tvShows.total_pages}
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

export default TvShows
