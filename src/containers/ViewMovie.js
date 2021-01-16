import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieOverview from '../components/Movies/MovieOverview';
import useDidMount from '../hooks/useDidMount';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {fetchSelectedMovie} from '../store/actions/index';
import MovieCast from '../components/Movies/MovieCast';
import { Button, Container, Grid } from '@material-ui/core';
import MoviePoster from '../components/Movies/MoviePoster';
import useStyles from '../common/Styles';
import SimilarMovies from '../components/Movies/SimilarMovies';
import Reviews from '../components/Movies/Reviews';

const ViewMovie = (props) => {
  const classes = useStyles();
  const {movie, casts, keywords, reviews } = useSelector(state => ({
    movie: state.movies.current.movie,
    casts: state.movies.current.casts,
    keywords: state.movies.current.keywords,
    reviews: state.movies.current.reviews,
  }));
  const dispatch = useDispatch();
  const didMount = useDidMount();
  const posters = movie.images ? movie.images.posters : [];

  useDocumentTitle(movie.id ? `${movie.original_name || movie.original_title} | MOVIESARK` : 'View Movie | MOVX');
  useEffect(() => {
    const movieId = props.match.params.id;
    fetchMovie(movieId);
  }, []);

  useEffect(() => {
    if (didMount || !movie.id) {
      fetchMovie(props.match.params.id);
    }
  }, [props.match.params.id]);

  const fetchMovie = (id) => {
    const { category } = props.match.params;

    if (parseInt(id, 10) !== movie.id) {
      dispatch(fetchSelectedMovie(category, id));
    }
  };

  const onClickViewImage = () => {
    props.history.push(`/view/movie/${props.match.params.id}/images`);
  };

  return (
    <div>
      <MovieOverview movie={movie}></MovieOverview>
      <MovieCast history={props.history} casts={casts} keywords={keywords} movie={movie}  />
      {movie.images && (
        <React.Fragment>
          <MoviePoster
            id={movie.id}
            posters={posters.length > 10 ? posters.slice(0, 10) : posters}
          />
          <Grid container justify="center" alignItems="center">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={onClickViewImage}
            fullWidth
            className={classes.viewButton}
          >
            View All Posters
          </Button>
          </Grid>
        </React.Fragment>
      )}
            {movie.similar && (
        <>
          {movie.similar.results.length !== 0 && (
            <SimilarMovies
              movies={movie.similar.results}
              category={props.match.params.category}
            />
          )}
        </>
      )}
      {(reviews.results && !!reviews.total_pages) && (
        <Reviews reviews={reviews} />
      )}
    </div>
  )
}

export default ViewMovie
