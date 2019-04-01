import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 750,
  },
};

const constructMovieDetailsUrl = movieId => `https://www.themoviedb.org/movie/${movieId}`;
const redirectToMoviePage = (movieId) => {
  window.location = constructMovieDetailsUrl(movieId);
};

// This component renders the movie poster and some details about the movie
const PosterCard = ({ classes, posterUrl, movieDetails }) => (
  <div>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={posterUrl} title={movieDetails.title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {movieDetails.title}
        </Typography>
        <Typography paragraph className={classes.secondaryText} color="textSecondary">
          (
          {new Date(movieDetails.release_date).getFullYear()}
          )
        </Typography>
        <Typography paragraph component="p">{movieDetails.overview}</Typography>
        <Chip label={`Rating: ${movieDetails.vote_average}`} className={classes.chip} variant="outlined" />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => redirectToMoviePage(movieDetails.id)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  </div>
);

PosterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired,
  movieDetails: PropTypes.object.isRequired,
};

export default withStyles(styles)(PosterCard);
