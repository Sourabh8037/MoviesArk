import { Container, Grid } from '@material-ui/core';
import React from 'react';
import PeopleCard from './PeopleCard';

// templateCount = number of items shown blank as loading template
const PeopleList = ({ people, templateCount,xs=6, sm=3, md=3, lg=2 }) => {
	return (
    <Container>
		<Grid container alignItems="center" justify="center" spacing={2}>
			{!people && templateCount != 0 ? new Array(templateCount).fill({}).map((item, index) => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}
        key={`skeleton_people_${index}`}
        >
        <PeopleCard
          category="people"
          people={{}}
        />
        </Grid>
      )) : people.map((person, index) => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}
        key={`${person.id}_${index}`}
        >
        <PeopleCard
          category="people"
          people={person}
        />
        </Grid>
      ))}
		</Grid>
    </Container>
	);
};

PeopleList.defaultProps = {
	templateCount: 0,
	category: 'movie',
	gridClass: 'grid'
};

export default PeopleList;
