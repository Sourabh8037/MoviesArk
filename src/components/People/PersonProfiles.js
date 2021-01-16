import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from '../../common/Styles';
import PosterCard from '../Poster/PosterCard';

const PersonProfiles = ({posters,id}) => {
const classes = useStyles();
return posters.length >=1 ? 
<Grid container spacing={3} className={classes.my3}>
  <Grid item xs={12}>
    <Typography variant="h5">Profile Images</Typography>
  </Grid>
  {posters.map((poster,index)=>
  <Grid item xs={6} sm={3} md={2} key={`${id}_poster${index}`}>
    <PosterCard poster={poster} />
  </Grid>)}
</Grid>
:
<Typography variant="h5" className={classes.my3}>No Profile Images Found!</Typography>
}

export default PersonProfiles
