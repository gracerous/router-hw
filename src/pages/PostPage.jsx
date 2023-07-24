import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

export default function PostPage() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const post = response.data;
        setArticle(post);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [id]);

  return (
    <Box>
      <Typography variant='h2'>{article.title}</Typography>
      <Typography variant='body1'>{article.body}</Typography>
    </Box>
  )
}
