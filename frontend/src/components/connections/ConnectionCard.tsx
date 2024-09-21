import React from 'react';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, MessageSquare, MoreHorizontal } from 'lucide-react';
import type { Connection, Label } from '@/types';

interface ConnectionCardProps {
  connection: Connection;
  labels: Label[];
  onUpdateLabel: (connectionId: string, labelId: string) => void;
}

export function ConnectionCard({ connection, labels, onUpdateLabel }: ConnectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={connection.avatar}
            alt={connection.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium">{connection.name}</h3>
            <p className="text-sm text-gray-500">{connection.title}</p>
            <p className="text-sm text-gray-500">{connection.company}</p>
          </div>
        </div>

        <DropdownMenu>
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
          <div className="py-1">
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
              Remove Connection
            </button>
          </div>
        </DropdownMenu>
      </div>

      <div className="mt-4 space-y-3">
        {connection.labels.map((label) => (
          <Badge key={label.id} variant="secondary" className="mr-2">
            {label.name}
          </Badge>
        ))}

        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            Add Label
          </Button>
          <Button size="sm" variant="outline" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}