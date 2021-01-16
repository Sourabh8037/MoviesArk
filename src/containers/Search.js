import { AppBar, Container, Tab, Tabs, Typography, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../common/Styles';
import { numberWithCommas } from '../helpers/helperFunctions';
import useDidMount from '../hooks/useDidMount';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { search } from '../store/actions';
import SwipeableViews from 'react-swipeable-views';
import SearchMovieTab from '../components/Search/SearchMovieTab';
import SearchTvTab from '../components/Search/SearchTvTab';
import SearchPeopleTab from '../components/Search/SearchPeopleTab';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Search = ({match}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  useDocumentTitle('Search | MOVIESARK');
  useEffect(() => {
    const queryString = match.params.query;
    if (queryString !== query) {
      dispatch(search(queryString));
    }
  }, []);
  const { movies, tv, query, people,totalFound } = useSelector(state => ({
    movies: state.search.search.movies,
    tv: state.search.search.tv,
    query: state.search.search.query,
    people: state.search.search.people,
    totalFound: state.search.search.people.total_results +
    state.search.search.movies.total_results +
    state.search.search.tv.total_results,
  }));
  const dispatch = useDispatch();
  const didMount = useDidMount();

  useEffect(() => {
      dispatch(search(match.params.query));
  }, [match.params.query]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.pyTab}>
      <Typography variant="h4" className={classes.my2}>Search</Typography>
      <Typography variant="body1" className={classes.my2}>
      {numberWithCommas(totalFound)}&nbsp;
            total results with keyword: &nbsp; {query}
      </Typography>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={`Movies ${movies.total_results}`} {...a11yProps(0)} />
          <Tab label={`Tv Shows ${tv.total_results}`} {...a11yProps(1)} />
          <Tab label={`People ${people.total_results}`} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <SearchMovieTab
              role="tab-panel"
              id={`full-width-tabpanel-0`}
              aria-labelledby={`full-width-tab-0`}
              movies={movies}
              query={match.params.query}
        />
        <SearchTvTab
              role="tab-panel"
              id={`full-width-tabpanel-1`}
              aria-labelledby={`full-width-tab-1`}
              query={match.params.query}
              tvShows={tv}
        />
        <SearchPeopleTab
              role="tab-panel"
              id={`full-width-tabpanel-2`}
              aria-labelledby={`full-width-tab-2`}
              people={people}
              query={match.params.query}
        />
      </SwipeableViews>
    </div>

    </Container>
  )
}

export default Search