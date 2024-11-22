import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Get the dynamic 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      {/* Here, you would typically fetch and display content based on the 'id' */}
      <p>This is the content for blog post #{id}.</p>
    </div>
  );
};

export default BlogPost;
