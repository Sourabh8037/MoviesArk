import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStyles from '../common/Styles';
import { isEmpty } from '../helpers/helperFunctions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import backgroundImg from '../images/background.jpg';
import PersonProfiles from '../components/People/PersonProfiles';

const ViewPictures = ({history}) => {
  const classes = useStyles();
  const actor = useSelector((state) => state.people.person.actor);
  useDocumentTitle('Profile Pictures');
  useEffect(() => {
    if (isEmpty(actor)) {
      history.goBack();
    }
  }, []);
  return (
    <React.Fragment>
        <div className={classes.posterContainerWrapper}>
        <div className={classes.containerBackdrop}></div>
        <img src={backgroundImg} alt="" className={classes.img}></img>
        <Container className={classes.posterSliderConent}>
          <div className={classes.personContainer}>
          <Grid container justify="center" alignItems="center" className={classes.h100}>
            <Grid item xs={12}>
        <Typography variant="h3">{actor.name}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.my1}>
        <Typography variant="subtitle1">Casted Movies</Typography>
        <Typography variant="subtitle1">{actor.images.profiles.length} Movies</Typography>
        </Grid>
        </Grid>
        </div>
        </Container>
      </div>
      <Container>
      <PersonProfiles
          id={actor.id}
          posters={actor.images.profiles}
        />
      </Container>
    </React.Fragment>
  )
}

export default ViewPictures
