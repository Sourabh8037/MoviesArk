import { Button, Container, Grid, Modal, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import useStyles from '../../common/Styles';
import backgroundImg from '../../images/background.jpg';


const PersonBiography = ({actor,history}) => {
  const classes = useStyles();
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face/';
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickLink = () => {
    history.push(`/view/person/profile/${actor.id}/images`);
  };

  return (
  <React.Fragment>
    <div className={classes.containerWrapper}>
      <div className={classes.containerBackdrop}/>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className={classes.paper}>
        <Typography variant="h4" align="center">{actor.name}'s Biography</Typography>
        <Typography variant="body1" align="justify">{actor.biography}</Typography>
        </div>
      </Modal>
      <img 
              alt=""
              src={backgroundImg} 
              className={classes.img}
          />
      <Grid container justify="center" alignItems="center" className={classes.sliderConent}>
      <Grid container item xs={12} md={3} justify="center" alignItems="center"  className={classes.mainGrid}>
          {actor.id ? (
            <img
            alt={actor.name}
            src={`${tmdbPosterPath + actor.profile_path}`}
            className={classes.viewPoster}></img>
            ) : <Skeleton variant="rect" animation="wave" width={"300px"} height={"450px"}/>}
        </Grid>

        <Grid item xs={12} md={7}>
          <Container>
          {actor.id ?
        <Typography variant="h4"  className={classes.title}>{actor.name}</Typography> : <Skeleton animation="wave" variant="h4"></Skeleton>}
        {actor.id ?
        <Typography  className={classes.ratings}>Biography</Typography> : <Skeleton animation="wave" variant="rect" height={16} width={25}/>}
        {
          actor.id ? 
        <Typography variant="h6" className={classes.personOverview} >{actor.biography || "Biography Not Found!"}</Typography>
        : <React.Fragment> 
          <Skeleton animation="wave" variant="text"></Skeleton>
          <Skeleton animation="wave" variant="text"></Skeleton>
          <Skeleton animation="wave" variant="text"></Skeleton>
          <Skeleton animation="wave" variant="text"></Skeleton>
          <Skeleton animation="wave" variant="text"></Skeleton>
</React.Fragment>
}
<Grid container justify="space-around" alignItems="center" spacing={3}>
  <Grid item xs={6}>
  {  actor.id ?
        <Button variant="contained" color="primary" fullWidth className={classes.viewButton}
         onClick={handleOpen}
        >Full Biography</Button>
        : <Skeleton animation="wave" variant="rect" height="3rem" width={"15rem"}/>
}
  </Grid>
  <Grid item xs={6}>
  {  actor.id ?
        <Button variant="contained" color="primary" fullWidth className={classes.viewButton}
         onClick={onClickLink}
        >View Photos</Button>
        : <Skeleton animation="wave" variant="rect" height="3rem" width={"15rem"}/>
}
  </Grid>
</Grid>
</Container>
        </Grid>
      </Grid>
    </div>
  </React.Fragment>
  )
}

export default PersonBiography
