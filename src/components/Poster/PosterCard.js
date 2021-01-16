import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import {downloadFileUrl} from '../../helpers/helperFunctions';
import { TMDB_POSTER_PATH, TMDB_POSTER_BASE } from '../../constants/constants';
import imgPlaceholder from '../../images/img-placeholder.jpg';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme=>({
  root: {
    padding:0,
  },
  p0:{padding:0},
}));

const PosterCard = (props) => {
  const classes = useStyles();
  const [isDownloading, setIsDownloading] = useState(false);
  const { file_path } = props.poster;

  const download = () => {
    setIsDownloading(true);
    downloadFileUrl(`${TMDB_POSTER_BASE + file_path}`)
      .then(() => setIsDownloading(false))
      .catch((e) => {
        setIsDownloading(false);
        console.log(e);
      });
  };
  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image={file_path ? `${TMDB_POSTER_PATH + file_path}` : imgPlaceholder} 
      />
      <CardContent className={classes.p0}>
        <Button 
        onClick={download} 
        fullWidth 
        color="secondary" 
        size="large"
        variant="contained"
        disabled={isDownloading}
        endIcon={isDownloading ? 
        <CircularProgress size={20} color="inherit" />:
          <GetAppIcon/>
      }
        >Download</Button>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default PosterCard
