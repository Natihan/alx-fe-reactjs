import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic parameter from the URL

  return <h2>Viewing Blog Post {id}</h2>;
};

export default BlogPost;
