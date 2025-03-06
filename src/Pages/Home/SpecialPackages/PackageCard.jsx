import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PackageCard = ({ image, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, position: 'relative' }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PackageCard;