import { useState } from 'react';

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (content: string) => {
    setIsLoading(true);
    try {
      // Implement post creation logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading };
}