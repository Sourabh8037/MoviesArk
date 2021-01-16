import { Container, Grid } from '@material-ui/core';
import React from 'react';
import MovieCard from './MovieCard';

// templateCount = number of items shown blank as loading template
const MovieList = ({ movies,templateCount,category,sm=3,md=2,lg=2}) => {
	return (
    <Container>
		<Grid container alignItems="center" justify="center" spacing={2}>
			{!movies && templateCount != 0 ? new Array(templateCount).fill({}).map((item, index) => (
        <Grid item xs={6} sm={sm} md={md} lg={lg} key={`skeleton_movie_${index}`}>
				<MovieCard
					movie={{}}
				/>
        </Grid>
			)) : movies.map((movie, index) => (
        <Grid item xs={6} sm={sm} md={md} lg={lg} key={`skeleton_movie_${index}`}>
				<MovieCard
					movie={movie}
					category={category}
				/>
        </Grid>
			))}
		</Grid>
    </Container>
	);
};

MovieList.defaultProps = {
	templateCount: 12,
	category: 'movie',
};

export default MovieList;
