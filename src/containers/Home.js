import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from "../helpers/helperFunctions";
import * as actions from "../store/actions/movieActions";
import MovieSlider from '../components/slider/MovieSlider';
import { Button, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import MovieList from '../components/Movies/MovieList';
import useStyles from '../common/Styles';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = (props) => {
  const classes = useStyles();
  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  } = useSelector(state => ({
    popularMovies: state.movies.popularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    upcomingMovies: state.movies.upcomingMovies,
  }));
  const dispatch = useDispatch();
  useDocumentTitle();
  useEffect(() => {
    if (isEmpty(popularMovies) ||
      isEmpty(topRatedMovies) ||
      isEmpty(upcomingMovies)
    ) {
      dispatch(actions.fetchMainMovies());
    }
  }, []);
  return (
    <React.Fragment>
      {popularMovies.results ? (
        <MovieSlider
          movies={popularMovies.results || []}
          history={props.history}
        />
      ) : (
          <MovieSlider
            movies={[{}]}
            history={props.history}
          />
        )}
        {
          upcomingMovies.results && (
            <Container className={classes.my1}>
              <Typography variant="h4" align="center">Upcoming Movies</Typography>
              <MovieList movies={upcomingMovies.results.slice(0,12)} templateCount={12}/>
              <Grid container justify="center">
              <Button variant="contained" 
              color="primary"
              onClick={() => props.history.push('/upcoming')}
              className={classes.viewButton}
              >View All Upcoming Movies</Button>
              </Grid>
            </Container>
          )
        }
        <Divider></Divider>
        {
          topRatedMovies.results && (
            <Container className={classes.my3}>
              <Typography variant="h4" align="center">Top Rated Movies</Typography>
              <MovieList movies={topRatedMovies.results.slice(0,12)}/>
              <Grid container justify="center">
              <Button variant="contained" 
              color="primary"
              onClick={() => props.history.push('/top_rated')}
              className={classes.viewButton}
              >View All Top Rated Movies</Button>
              </Grid>
            </Container>
          )
        }
    </React.Fragment>
  )
}

export default Home
