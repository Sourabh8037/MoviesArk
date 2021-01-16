import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../helpers/helperFunctions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {fetchGenres} from '../store/actions/index';
import useStyles from '../common/Styles';
import { Container, Grid, Typography } from '@material-ui/core';
import GenreCard from '../components/Genre/GenreCard';

const Genre = (props) => {
  const classes = useStyles();
  const { genres} = useSelector(state => ({
    genres: state.genre.genres,
  }));
  const dispatch = useDispatch();

  useDocumentTitle('Genres | MOVIESARK');
  useEffect(() => {
    if (isEmpty(genres)) {
      dispatch(fetchGenres('/genre/movie/list?'));
    }
  }, []);
  return (
    <Container className={classes.py4}>
      <Typography variant="h4" className={classes.my2}>View Genres</Typography>
      <Grid container spacing={3}>
      {genres.map((genre) => {
              return (
                  <Grid item xs={12} sm={6} key={genre.id}>
                <GenreCard
                  category="genre"
                  genre={genre}
                />
                </Grid>
              );
            })}
      </Grid>
    </Container>
  )
}

export default Genre
