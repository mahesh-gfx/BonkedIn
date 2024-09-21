import React from 'react';
import { usePostStore } from '@/store/postStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { Edit2, Trash2, Clock } from 'lucide-react';

export function ScheduledPostList() {
  const { scheduledPosts, deleteScheduledPost, publishPost } = usePostStore();

  const sortedPosts = [...scheduledPosts].sort(
    (a, b) => a.scheduledFor.getTime() - b.scheduledFor.getTime()
  );

  return (
    <div className="space-y-4">
      {sortedPosts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Scheduled for {formatDate(post.scheduledFor)}
              </p>
              <p>{post.content}</p>
              <div className="flex space-x-2">
                <Badge variant="secondary">{post.visibility}</Badge>
                <Badge
                  variant={post.status === 'published' ? 'success' : 'default'}
                >
                  {post.status}
                </Badge>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => publishPost(post.id)}
                disabled={post.status === 'published'}
              >
                <Clock className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => deleteScheduledPost(post.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}