import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostActionsProps {
  postId: string;
}

export function PostActions({ postId }: PostActionsProps) {
  const handleDelete = async () => {
    // Implement delete logic
    console.log('Delete post:', postId);
  };

  const handleReport = async () => {
    // Implement report logic
    console.log('Report post:', postId);
  };

  return (
    <div className="mt-4 flex justify-end">
      <div className="relative">
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}