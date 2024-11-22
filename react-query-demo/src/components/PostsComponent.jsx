import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Use the useQuery hook from React Query to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 2, // Data is considered fresh for 2 minutes
  });

  // If the data is loading, show a loading message
  if (isLoading) return <div>Loading...</div>;

  // If there's an error, display the error message
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
