import React from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface PostEngagementProps {
  likes: number;
  comments: number;
  shares: number;
}

export function PostEngagement({ likes, comments, shares }: PostEngagementProps) {
  return (
    <div className="flex items-center space-x-6 mt-4 pt-4 border-t">
      <Button variant="outline" size="sm">
        <ThumbsUp className="w-4 h-4 mr-2" />
        {likes}
      </Button>
      
      <Button variant="outline" size="sm">
        <MessageSquare className="w-4 h-4 mr-2" />
        {comments}
      </Button>
      
      <Button variant="outline" size="sm">
        <Share2 className="w-4 h-4 mr-2" />
        {shares}
      </Button>
    </div>
  );
}