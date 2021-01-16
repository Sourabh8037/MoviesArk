import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import imgPlaceholder from '../../images/img-placeholder.jpg';

const useStyles = makeStyles(theme=>({
  root: {
    minHeight:300,
    backgroundColor:"#111111",
    padding:0,
  },
  link:{
    textDecoration:"none",
    height:"100%",
    width:"100%",
    color:theme.palette.text.primary,
  },
  name:{
    fontSize:'0.8rem',
    fontWeight:'600',
  }
}));

/* eslint camelcase: 0 */
const PeopleCard = ({ people,category}) => {
  const classes = useStyles();
  const {
    id,
    profile_path,
    name,
    character
  } = people;
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w185_and_h278_face/';
  const dispatch = useDispatch();
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
        <NavLink to={`/view/person/profile/${id}`} className={classes.link}>
        {id ?
        <CardMedia
          component="img"
          alt={name}
          height="250"
          image={profile_path ? `${tmdbPosterPath + profile_path}` : imgPlaceholder}
          title={name}
        /> : <Skeleton animation="wave" variant="rect" height={200} width={"100%"} />
}
        <CardContent>
          {id ? 
          <Typography gutterBottom className={classes.name}>
          {name}
          </Typography> : 
            <Skeleton animation="wave"></Skeleton>
  }
          {id?
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            {character}
          </Typography>
          : <Skeleton animation="wave"></Skeleton>}
        </CardContent>
        </NavLink> 
      </CardActionArea>
    </Card>
    </React.Fragment>
  );
};

export default PeopleCard;
