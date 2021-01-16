import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import MovieList from '../Movies/MovieList';

const useStyles = makeStyles(theme=>({
  my3:{margin:"2rem auto"},
  my1:{margin:"0.5rem auto 1.5rem"},
  button:{maxWidth:"15rem",margin:"1rem auto"},
}));

const Casting = ({ casting, actor, match, history }) => {
  const actorId = actor.id;
  const classes = useStyles();
  const onClickLink = () => {
    history.push(`/view/person/profile/${actorId}/casting`);
    window.scrollTo(null, 0);
  };
  return (
<Container className={classes.my3}>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" className={classes.my1}>Known For</Typography>
          <MovieList 
              movies={casting.slice(0,8)} 
              sm={4}
          />
          <Grid container justify="center" alignItems="center">
          <Button variant="contained" 
              color="primary"
              fullWidth
              className={classes.button}
              onClick={onClickLink}
              size="large"
              >View All Casting</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          
          {actor.birthday && 
          <div className={classes.my1}>
          <Typography variant="h6">Birthday</Typography>
          <Typography variant="body1">{actor.birthday}</Typography>
          </div>          
          }
          {actor.known_for_department && 
          <div className={classes.my1}>
          <Typography variant="h6">Known For</Typography>
          <Typography variant="body1">{actor.known_for_department}</Typography>
          </div>
          }
          {actor.gender && 
                    <div className={classes.my1}>
                    <Typography variant="h6">Gender</Typography>
                    <Typography variant="body1">{actor.gender === 1 ? 'Female' : 'Male'}</Typography>
                    </div>
          }
          {actor.place_of_birth &&           
          <div className={classes.my1}>
          <Typography variant="h6">Place of Birth</Typography>
          <Typography variant="body1">{actor.place_of_birth}</Typography>
          </div> }
          {actor.also_known_as && actor.also_known_as.length !== 0 && (
              <div className={classes.my1}>
                <Typography variant="h6">Also known as</Typography>
              {actor.also_known_as && actor.also_known_as.map(name => (
                          <Typography key={name} variant="body1">{name}
                          </Typography>
              ))}
            </div>
          )}
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default Casting
