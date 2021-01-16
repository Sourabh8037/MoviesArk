import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PeopleList from '../components/People/PeopleList';
import useDocumentTitle from '../hooks/useDocumentTitle';
import usePageSaver from '../hooks/usePageSaver';
import { fetchPeople } from '../store/actions';
import useStyles from '../common/Styles';
import { isEmpty, numberWithCommas } from '../helpers/helperFunctions';

const People = (props) => {
  const classes = useStyles();
  const { people } = useSelector((state) => ({
    people: state.people.people,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();
  const query = '/person/popular?';

  useDocumentTitle('Discover People | MOVIESARK');
  useEffect(() => {
    if (isEmpty(people)) {
      dispatch(fetchPeople(query, currentPage));
    }
  }, []);

  const handlePageChange = (event, page) => {
    if (people.page !== page) {
      setCurrentPage(page);
      dispatch(fetchPeople(query, page));
    }
  };
  return (
    <Container className={classes.py4}>
      <Typography variant="h4">Popular People</Typography>
      <Typography variant="h6">{numberWithCommas(people.total_results)} People</Typography>
      <Divider className={classes.mt1}></Divider>
      {people ? 
      <PeopleList templateCount={12} sm={3} people={people.results}></PeopleList> :
      <PeopleList templateCount={12} sm={2} people={[]}/>
      }
    <Grid container justify="center" alignItems="center" className={classes.mt1}>
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

export default People
