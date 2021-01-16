import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import usePageSaver from '../../hooks/usePageSaver';
import { searchPeople, searchTvShows } from '../../store/actions';
import PeopleList from '../People/PeopleList';
import useStyles from '../../common/Styles';
import { Pagination } from '@material-ui/lab';

const SearchPeopleTab = ({people,query}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentPage, setCurrentPage } = usePageSaver();
  const handlePageChange = (event, page) => {
    if (people.page !== page) {
      people.results=undefined;
      setCurrentPage(page);
      dispatch(searchPeople(`/search/people?query=${query}`, page));
    }
  };

  return (
    <Container className={classes.pyTab}>
      <PeopleList sm={3} md={2} people={people.results} templateCount={20}></PeopleList>
      <Grid container className={classes.my1} justify="center" alignItems="center">
        <Pagination
      count={people.total_pages}
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

export default SearchPeopleTab
