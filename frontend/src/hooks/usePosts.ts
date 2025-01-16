import { useState } from 'react';
import type { Post } from '@/types/post';

export function usePosts() {
  const [posts] = useState<Post[]>([{
    id: '1',
    content: 'Hello World!',
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      title: 'Software Developer'
    },
    createdAt: new Date(),
    likes: 0,
    comments: 0,
    shares: 0
  }]);

  return { posts, isLoading: false, error: null };
}