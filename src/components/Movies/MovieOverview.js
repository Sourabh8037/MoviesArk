import { Button, Container, Grid, Modal, Typography } from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import { useDispatch } from 'react-redux';
import imgPlaceholder from '../../images/img-placeholder.jpg';
import {getCSSVar,getYear,isEmpty} from '../../helpers/helperFunctions';
import useStyles from '../../common/Styles';
import "../../../node_modules/react-modal-video/css/modal-video.min.css";


const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face/';
const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';

const MovieOverview = ({movie,history}) => {
  const classes = useStyles();
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenVideoModal, setOpenVideoModal] = useState(false);
  const dispatch = useDispatch();

  const youtube = 'https://www.youtube.com/results?search_query=';
  const modalStyle = {
    modal: {
      background: '#0f1214',
      padding: '50px',
      textAlign: 'center',
      borderRadius: '6px'
    },
    closeButton: {
      top: '10px',
      right: '10px'
    },
    closeIcon: {
      fill: '#fff'
    }
  };

  const openVideoModal = () => {
    console.log(movie.videos.results);
    if (movie.videos.results.length >= 1) {
      setOpenVideoModal(true);
    } else {
      setOpenModal(true);
    }
  };

  const closeVideoModal = () => setOpenVideoModal(false);

  const openModal = () => setOpenModal(false);

  const closeModal = () => setOpenModal(false);
  return (
    <React.Fragment>
      <div className={classes.containerWrapper}>
      <ModalVideo
        channel="youtube"
        modalVideo="movie-modal-video"
        isOpen={isOpenVideoModal}
        onClose={closeVideoModal}
        playlist={isEmpty(movie) ? null : movie.videos.results[0] ? movie.videos.results.map(video => video.key) : null}
        videoId={isEmpty(movie) ? null : movie.videos.results[0] ? movie.videos.results[0].key : null}
        className={classes.modalVideo}
      />
      <Modal
        onClose={closeModal}
        open={isOpenModal}
      >
        <React.Fragment>
        <h2>No Trailer Found</h2>
        <p>View in youtube instead</p>
        <a
          className={classes.modalLink}
          href={`${youtube + movie.original_title + getYear(movie.release_date)}`}
          target="_blank">
          Search in Youtube
        </a>
        </React.Fragment>
      </Modal>
        <div className={classes.containerBackdrop}>
        </div>
        <img 
                alt=""
                src={tmdbBackdropPath + movie.backdrop_path} 
                className={classes.img}
            />
        <Grid container justify="center" alignItems="center" className={classes.sliderConent}>
        <Grid container item xs={12} md={3} justify="center" alignItems="center"  className={classes.mainGrid}>
            {movie.id ? (
              <img
              alt={movie.original_title || movie.original_name || movie.title}
              src={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : imgPlaceholder}
              className={classes.viewPoster}></img>
              ) : <Skeleton variant="rect" animation="wave" width={"300px"} height={"450px"}/>}
          </Grid>

          <Grid item xs={12} md={7}>
            <Container>
            {movie.id ?
          <Typography variant="h1"  className={classes.title}>{movie.original_title}</Typography> : <Skeleton animation="wave" variant="h1"></Skeleton>}
          {movie.id ?
          <Typography  className={classes.ratings}>Ratings:   
          <Rating readOnly max={1} precision={0.1} value={1}></Rating>
          &nbsp;{movie.vote_average}</Typography> : <Skeleton animation="wave" variant="h4"/>}
          {movie.id ? (movie.id && movie.genres.length >= 1) &&
                  <Typography  className={classes.ratings}>
                    {movie.genres.map((genre, index) => (
                      <span key={`${movie.id}_genre${genre.id}`}>{genre.name} {(index < (movie.genres.length - 1)) && '/ '}</span>
                    ))}
                  </Typography>:
                  <Skeleton variant="h5"></Skeleton>
          }
          {
            movie.id ? 
          <Typography variant="h6" >{movie.overview}</Typography>
          : <React.Fragment> 
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
            <Skeleton animation="wave" variant="text"></Skeleton>
</React.Fragment>
}
 {  movie.id ?
          <Button  variant="contained" color="primary" fullWidth className={classes.viewButton}
           onClick={openVideoModal}
          >Watch Trailer</Button>
          : <Skeleton animation="wave" variant="rect" height="3rem" width={"15rem"}/>
}
</Container>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default MovieOverview
