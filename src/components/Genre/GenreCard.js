import { ButtonBase, Typography } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useStyles from '../../common/Styles';
import action from '../../images/action.jpg';
import adventure from '../../images/adventure.jpg';
import animation from '../../images/animation.jpg';
import comedy from '../../images/comedy.jpg';
import crime from '../../images/crime.jpg';
import documentary from '../../images/documentary.jpg';
import drama from '../../images/drama.png';
import family from '../../images/family.jpg';
import fantasy from '../../images/fantasy.jpg';
import history from '../../images/history.jpg';
import horror from '../../images/horror.jpg';
import music from '../../images/music.jpg';
import mystery from '../../images/mystery.jpg';
import romance from '../../images/romance.jpg';
import science from '../../images/science.jpg';
import tv from '../../images/tv.jpg';
import thriller from '../../images/thriller.jpg';
import war from '../../images/war.jpg';
import western from '../../images/western.jpg';

const GenreCard = (props) => {
  const classes = useStyles();
  const { 
    id,
    name
  } = props.genre;
  const genreName = name.split(' ')[0].toLowerCase();

  const paths = {
    action,
    adventure,
    animation,
    comedy,
    crime,
    documentary,
    drama,
    family,
    fantasy,
    history,
    horror,
    music,
    mystery,
    romance,
    science,
    tv,
    thriller,
    war,
    western
  };
  return (
    <NavLink className={classes.navLink} to={`/genre/${name.toLowerCase().replace(' ', '-')}/${id}`}>
<ButtonBase
          focusRipple
          key={name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "80%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${paths[genreName]})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </NavLink>
  )
}

export default GenreCard
