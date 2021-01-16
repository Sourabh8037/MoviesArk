import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import usePageSaver from '../../hooks/usePageSaver';
import { searchTvShows } from '../../store/actions';
import MovieList from '../Movies/MovieList';
import useStyles from '../../common/Styles';
import { Pagination } from '@material-ui/lab';

const SearchTvTab = ({tvShows,query}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentPage, setCurrentPage } = usePageSaver();
  const handlePageChange = (event, page) => {
    if (tvShows.page !== page) {
      tvShows.results=undefined;
      setCurrentPage(page);
      dispatch(searchTvShows(`/search/tv?query=${query}`, page));
    }
  };
  console.log(tvShows);
  return (
    <Container className={classes.pyTab}>
      <MovieList movies={tvShows.results} category="tv" templateCount={20}>
      </MovieList>
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
    </Container>
  )
}

export default SearchTvTab
