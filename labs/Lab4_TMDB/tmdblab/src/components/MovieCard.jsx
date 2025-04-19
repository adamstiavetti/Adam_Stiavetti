import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fallback from '../assets/fallback.jpg';

function MovieCard({ title, overview, rating, posterPath}) {
    const fallBackImage = fallback

    const posterURL = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : fallBackImage;

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#1e1e1e", color: "#fff", margin: 2}}>
            <CardMedia
            component="img"
            height="400"
            image={posterURL}
            alt={`${title} poster`}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="gray">
                    {overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}
                </Typography>
                <Typography variant="subtitle2" color="gold" sx={{ mt: 1 }}>
                    Rating: {rating}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MovieCard;