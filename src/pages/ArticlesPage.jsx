import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { Box } from '@mui/system';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data;
        setArticles(posts);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {articles.length > 0 &&
        articles.map((article) => (
          <PostCard key={article.id} id={article.id} title={article.title} bodyText={article.body} />
        ))}
    </Box>
  );
}
