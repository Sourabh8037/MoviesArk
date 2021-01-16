import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import imgPlaceholder from '../../images/img-placeholder.jpg';

const useStyles = makeStyles(theme=>({
  root: {
    minHeight:280,
    padding:0,
  },
  link:{
    textDecoration:"none",
    height:"100%",
    width:"100%",
    color:theme.palette.text.primary,
  },
  p0:{
    padding:"0 0.5rem",
  },
  my1:{
    margin:"0.5rem auto",
    fontSize:16
  }
}));

/* eslint camelcase: 0 */
const MovieCard = ({ movie,category}) => {
  const classes = useStyles();
  const {
    id,
    poster_path,
    original_name,
    original_title,
    release_date,
    first_air_date,
    vote_average,
    title
  } = movie;
  const dispatch = useDispatch();
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w185_and_h278_face/';
  const onClickCard = (e) => {
    // prevent clicking of movie cards if loading 
    // if (isLoading) {
    //   e.preventDefault();
    // }
  };

  return (
    <React.Fragment>
      <Card className={classes.root}>
      <CardActionArea>
        <NavLink to={`/view/${category}/${id}`} className={classes.link}>
        {id ?
        <CardMedia
          component="img"
          alt={original_title || original_name || title || 'Not Available'}
          height="250"
          image={poster_path ? `${tmdbPosterPath + poster_path}` : imgPlaceholder}
          title={original_title || original_name || title || 'Not Available'}
        /> : <Skeleton animation="wave" variant="rect" height={200} width={"100%"} />
}
        <CardContent className={classes.p0}>
          {id?
          <Rating className={classes.my1} value={vote_average} readOnly size="small" max={10}></Rating>
          :<Skeleton animation="wave" ></Skeleton>}
          {id ? 
          <Typography align="center" className={classes.my1} variant="body">
          {original_title || original_name || title || 'Not Available'}
          </Typography> : 
            <Skeleton className={classes.my1} animation="wave"></Skeleton>
  }
          {id?
          <Typography align="center" variant="body2" className={classes.my1} color="textSecondary" component="p">
            {release_date || first_air_date}
          </Typography>
          : <Skeleton className={classes.my1} animation="wave"></Skeleton>}
        </CardContent>
        </NavLink> 
      </CardActionArea>
    </Card>
    </React.Fragment>
  );
};

export default MovieCard;
