import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../../common/Styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Reviews = ({reviews}) => {
  const classes = useStyles();
  return (
    <Container className={classes.my1}>
      <Typography variant="h4" className={classes.my1}>Reviews</Typography>
      {reviews.results.map((review,index)=>(
        <Accordion key={`review_${review.id}`}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.reviewTitle}>{review.author}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {review.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </Container>
  )
}

export default Reviews
