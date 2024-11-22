import React from 'react';
import { useQuery } from 'react-query';

const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: true,  // Automatically refetch when the window is focused
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 2,
  });  

// Fetching function to get data from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Using the useQuery hook to fetch posts
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5,  // Cache data for 5 minutes
    staleTime: 1000 * 60 * 2,  // Consider data fresh for 2 minutes
  });

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
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

