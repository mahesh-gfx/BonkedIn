import React from 'react';
import { Post } from './Post';
import { CreatePost } from './CreatePost';
import { usePosts } from '@/hooks/usePosts';

export function Feed() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading feed</div>;

  return (
    <div className="space-y-6">
      <CreatePost />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}