import React from 'react';
import { Button } from '@/components/ui/button';
import { BookmarkPlus } from 'lucide-react';

interface SaveSearchButtonProps {
  onSave: () => void;
}

export function SaveSearchButton({ onSave }: SaveSearchButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center"
      onClick={onSave}
    >
      <BookmarkPlus className="w-4 h-4 mr-2" />
      Save Search
    </Button>
  );
}