import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PeopleList from '../People/PeopleList';
import MovieDetails from '../Movies/MovieDetails';


const useStyles = makeStyles(theme=>({
  my3:{margin:"2rem auto"},
  my1:{margin:"0.5rem auto 1.5rem"},
  button:{maxWidth:"15rem",margin:"1rem auto"},
}));

const MovieCast = ({ casts, movie, keywords, history, match }) => {
  const classes = useStyles();
  return (
    <Container className={classes.my3}>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" className={classes.my1}>Top Billed Cast</Typography>
          <PeopleList 
              people={casts.slice(0, 12)} 
              sm={4}
              md={3}
              lg={3}
              xs={6}
          />
          <Grid container justify="center" alignItems="center">
          <Button variant="contained" 
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push(`/view/movie/${match.params.id}/casts`)}
              size="large"
              >View All Casts</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
        <MovieDetails 
            keywords={keywords}
            movie={movie}
            history={history}
        />
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default MovieCast
