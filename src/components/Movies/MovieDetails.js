import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import {numberWithCommas, toHrsMins} from '../../helpers/helperFunctions';

const useStyles = makeStyles(theme=>({
  mb1:{marginBottom:"0.2rem"},
  my1:{margin:"1rem auto"},
  homepage:{width:"50%"},
}));

const MovieDetails = ({ movie, keywords, history }) => {
  const classes = useStyles();
  return (
      <Container>
      {movie.genres && <React.Fragment>
        <Typography variant="h6" className={classes.mb1}>Genre</Typography>
        <Grid className={classes.my1} container justify="space-around" alignItems="center" spacing={3}>
      {movie.genres.map((genre) => {
          const genreName = genre.name.toLowerCase().replace(' ', '-');
          return (
            <Grid item xs={6} key={genre.id+genre.name}>
                      <Button
                      variant="outlined" 
                      color="primary"
                      fullWidth
                      onClick={() => history.push(`/genre/${genreName}/${genre.id}`)}
                      >{genre.name}</Button>
             </Grid>
          );
        })}
        </Grid>
        </React.Fragment>}
      {movie.homepage && (
      <div className={classes.my1}>
        <Typography variant="h6">Homepage</Typography>
        <Button variant="text" href={movie.homepage} className={classes.homepage}>
        🌏 &nbsp; Visit
        </Button>
      </div>
    )}
          {movie.release_date && (
      <div className={classes.my1}>
        <Typography variant="h6">Release Date</Typography>
        <Typography variant="subtitle1">{movie.release_date}</Typography>
      </div>
    )}
    {movie.status && (
      <div className={classes.my1}>
        <Typography variant="h6">Status</Typography>
        <Typography variant="subtitle1">{movie.status}</Typography>
      </div>
    )}
    {movie.vote_average && (
      <div className={classes.my1}>
        <Typography variant="h6">Rating</Typography>
        <Typography variant="subtitle1">★ {movie.vote_average}</Typography>
      </div>
    )}
    {movie.budget>0 && (
      <div className={classes.my1}>
        <Typography variant="h6">Budget</Typography>
        <Typography variant="subtitle1">${numberWithCommas(movie.budget)}</Typography>
      </div>
    )}
    {movie.revenue>0 && (
      <div className={classes.my1}>
        <Typography variant="h6">Revenue</Typography>
        <Typography variant="subtitle1">${numberWithCommas(movie.revenue)}</Typography>
      </div>
    )}
    {movie.runtime && (
      <div className={classes.my1}>
        <Typography variant="h6">Runtime</Typography>
        <Typography variant="subtitle1">{toHrsMins(movie.runtime)}</Typography>
      </div>
    )}
    {keywords && keywords.length >= 1 && (
      <div className={classes.my1}>
        <Typography variant="h6">Keywords</Typography>
        <Grid className={classes.my1} container justify="space-around" alignItems="center" spacing={3}>
        {keywords.slice(0,6).map(keyword => (
                      <Grid item xs={6} key={keyword.id+keyword.name}>
                      <Button
                      variant="outlined" 
                      color="primary"
                      fullWidth
                      onClick={() => history.push(`/search/movie/${keyword.name}`)}
                      >#{keyword.name}</Button>
             </Grid>
        ))}
        </Grid>
      </div>
    )}
    </Container>
  )
}

export default MovieDetails;
