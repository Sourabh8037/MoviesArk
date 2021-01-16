import { makeStyles } from '@material-ui/core';
import React from 'react'
import Slider from 'react-slick';
import "../../App.css";
import SliderItem from './SliderItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";


const useStyles = makeStyles((theme) => ({
  movie_slider_wrapper:{
    position:"relative",
    width:"100%",
  },
}));

const MovieSlider = (props) => {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    easing: 'easeInOutQuad',
    fade: true,
    adaptiveHeight:false,
  };
  return (
    <React.Fragment>
      <div>
        <Slider {...settings} className={classes.movie_slider_wrapper} >
          {props.movies.map((movie, index) => (
            <SliderItem 
                key={movie.id || `movie_slider${index}`} 
                movie={movie}
                history={props.history}
             />
            ))}
      </Slider>
    </div>
    </React.Fragment>
  )
}

export default MovieSlider
