import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useApplicationStore } from '@/store/applicationStore';
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
import { ResumeSelector } from './ResumeSelector';

const applyFormSchema = z.object({
  resumeId: z.string(),
  coverLetter: z.string().optional(),
  phoneNumber: z.string().min(10).max(15),
  availability: z.string(),
  salaryExpectation: z.string(),
});

interface EasyApplyFormProps {
  jobId: string;
  onSubmit: () => void;
}

export function EasyApplyForm({ jobId, onSubmit }: EasyApplyFormProps) {
  const { addApplication, resumes } = useApplicationStore();
  const form = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
  });

  const handleSubmit = (values: z.infer<typeof applyFormSchema>) => {
    const resume = resumes.find((r) => r.id === values.resumeId);
    if (!resume) return;

    addApplication({
      id: crypto.randomUUID(),
      jobId,
      userId: 'current-user-id',
      resume,
      coverLetter: values.coverLetter,
      status: 'submitted',
      answers: {
        phoneNumber: values.phoneNumber,
        availability: values.availability,
        salaryExpectation: values.salaryExpectation,
      },
      submittedAt: new Date(),
      lastUpdated: new Date(),
    });

    onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="resumeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <ResumeSelector
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a cover letter..."
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="e.g., 2 weeks notice"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="salaryExpectation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary Expectation</FormLabel>
              <FormControl>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="e.g., $80,000 - $100,000"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline">
            Save Draft
          </Button>
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </Form>
  );
}