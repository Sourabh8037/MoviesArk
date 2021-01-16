import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useStyles from '../common/Styles';
import MovieList from '../components/Movies/MovieList';
import { isEmpty } from '../helpers/helperFunctions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import backgroundImg from '../images/background.jpg';

const ViewCasting = ({history}) => {
  const classes = useStyles();
  const { actor, casting } = useSelector(state => ({
    actor: state.people.person.actor,
    casting: state.people.person.casting,
  }));

  useDocumentTitle('Castings | MOVIESARK');
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
        <Typography variant="subtitle1">{casting.length} Movies</Typography>
        </Grid>
        </Grid>
        </div>
        </Container>
      </div>
      <Container>
      <MovieList
          category="movie"
          movies={casting}
        />
      </Container>
      </React.Fragment>
  )
}

export default ViewCasting
