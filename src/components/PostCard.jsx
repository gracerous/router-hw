import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function PostCard({ title, bodyText, id }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {bodyText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/article/${id}`)} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
