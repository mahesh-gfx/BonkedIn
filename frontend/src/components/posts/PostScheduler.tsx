import React from 'react';
import { usePostStore } from '@/store/postStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const postSchedulerSchema = z.object({
  content: z.string().min(1).max(1000),
  scheduledFor: z.date().min(new Date()),
  visibility: z.enum(['public', 'connections', 'private'])
});

export function PostScheduler() {
  const { addScheduledPost } = usePostStore();
  const form = useForm<z.infer<typeof postSchedulerSchema>>({
    resolver: zodResolver(postSchedulerSchema),
    defaultValues: {
      visibility: 'public'
    }
  });

  const onSubmit = (values: z.infer<typeof postSchedulerSchema>) => {
    addScheduledPost({
      id: crypto.randomUUID(),
      content: values.content,
      scheduledFor: values.scheduledFor,
      status: 'scheduled',
      visibility: values.visibility,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What do you want to share?"
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="scheduledFor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Schedule For</FormLabel>
              <FormControl>
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date()}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visibility</FormLabel>
              <FormControl>
                <select
                  className="w-full p-2 border rounded"
                  {...field}
                >
                  <option value="public">Public</option>
                  <option value="connections">Connections Only</option>
                  <option value="private">Private</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Schedule Post</Button>
        </div>
      </form>
    </Form>
  );
}