import React from 'react';
import { useAIContentDetector } from '@/hooks/useAIContentDetector';
import { formatDate } from '@/lib/utils';
import { PostEngagement } from './PostEngagement';
import { PostActions } from './PostActions';

interface PostProps {
  post: {
    id: string;
    content: string;
    author: {
      id: string;
      name: string;
      avatar: string;
      title: string;
    };
    createdAt: Date;
    likes: number;
    comments: number;
    shares: number;
    aiScore?: number;
  };
}

export function Post({ post }: PostProps) {
  const { isAIGenerated, confidence } = useAIContentDetector(post.content);

  return (
    <article className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.title}</p>
              <time className="text-sm text-gray-400">
                {formatDate(post.createdAt)}
              </time>
            </div>
            {isAIGenerated && (
              <div className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                AI Content ({Math.round(confidence * 100)}% confidence)
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <p className="text-gray-800">{post.content}</p>
          </div>

          <PostEngagement
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
          
          <PostActions postId={post.id} />
        </div>
      </div>
    </article>
  );
}