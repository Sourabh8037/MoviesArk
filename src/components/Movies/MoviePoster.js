import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PosterCard from '../Poster/PosterCard';
import useStyles from '../../common/Styles';

const MoviePoster = ({id,posters}) => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" className={classes.my1}>View Posters</Typography>
		<Grid container alignItems="center" justify="center" spacing={3}>
      {posters.map((poster,index)=>(     
      <Grid item xs={6} sm={2} key={`${id}_poster${index}`}>   
      <PosterCard
      poster={poster}
      />
      </Grid>))}
		</Grid>
    </Container>
  )
}

export default MoviePoster
