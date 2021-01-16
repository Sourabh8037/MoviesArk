import {Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import React from 'react'
import LazyLoad from "react-lazy-load";
import imgPlaceholder from "../../images/img-placeholder.jpg";
import ImageLoader from "../../common/ImageLoader";
import useStyles from "../../common/Styles";

const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face/';
const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';

const SliderItem = (props) => {
  const {movie,history} = props;
  const classes = useStyles();
  return (
      <div className={classes.containerWrapper}>
        <div className={classes.containerBackdrop}>
        </div>
        <img 
                alt=""
                src={tmdbBackdropPath + movie.backdrop_path} 
                className={classes.img}
            />
        <Grid container justify="center" alignItems="center" className={classes.sliderConent}>
        <Grid item xs={12} container md={5} justify="center" alignItems="center">
            {movie.id ? (
              <img
              alt={movie.original_title || movie.original_name || movie.title}
              src={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : imgPlaceholder}
              className={classes.viewPoster}></img>
              ) : <Skeleton variant="rect" animation="wave" className={classes.viewPoster}/>}
          </Grid>

          <Grid item xs={12} md={5}>
            
          <Typography variant="h4" align="center" className={classes.title}>{movie.id ? movie.original_title :
          <Skeleton animation="wave" variant="rect" width="200px" height="3rem" className={classes.viewButton}></Skeleton>}</Typography>
          {movie.id ?
          <Typography align="center" className={classes.ratings}>Ratings:   
          <Rating readOnly max={1} precision={0.1} value={1}></Rating>
          &nbsp;{movie.vote_average}</Typography> : <Skeleton animation="wave" variant="h4" className={classes.ratings} />}
          {
            movie.id ? 
          <Typography align="center" className={classes.movieOverview}>{movie.overview}</Typography>
          : <React.Fragment> 
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
</React.Fragment>
}
 {  movie.id ?
          <Grid container justify="center" alignItems="center">
          <Button  variant="contained" color="primary" fullWidth
          onClick={() => history.push(`/view/movie/${movie.id}`)}
          className={classes.viewButton}>View Movie</Button>
          </Grid>:
          <Grid container justify="center" alignItems="center">
          <Skeleton animation="wave" variant="rect" height="3rem" width={"15rem"}/>
          </Grid>
}
          </Grid>
        </Grid>
      </div>
  )
}


export default SliderItem
