import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const MovieCard = ({ title, poster_path, overview }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500 }}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={poster_path}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
};

export default MovieCard;
