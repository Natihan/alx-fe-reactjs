import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use useQuery with the correct options for caching and refetching behavior
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: true, // Automatically refetch when the window gains focus
    keepPreviousData: true,     // Keep previous data while new data is being fetched
    staleTime: 1000 * 60 * 5,   // Cache data for 5 minutes (don't refetch for 5 minutes)
    cacheTime: 1000 * 60 * 10,  // Cache data for 10 minutes before being garbage collected
  });

  // Show loading state while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error state if fetching fails
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Button to manually trigger refetch */}
      <button onClick={() => refetch()}>Refetch Posts</button>
      {/* Render the list of posts */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
