import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CreatePost() {
  return (
    <Card className="p-4">
      <div className="flex items-start space-x-4">
        <textarea
          className="flex-1 p-3 border rounded-lg resize-none"
          placeholder="What's on your mind?"
          rows={3}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <Button>Post</Button>
      </div>
    </Card>
  );
}