import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import type { User } from '@/types';

interface PeopleListProps {
  people: User[];
}

export function PeopleList({ people }: PeopleListProps) {
  return (
    <div className="grid gap-4">
      {people.map((person) => (
        <Card key={person.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.title}</p>
                <p className="text-sm text-gray-500">{person.company}</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center">
              <UserPlus className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}