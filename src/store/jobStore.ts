import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Job, SavedSearch } from '@/types';

interface JobStore {
  savedJobs: Job[];
  savedSearches: SavedSearch[];
  applications: {
    jobId: string;
    status: string;
    appliedAt: Date;
  }[];
  saveJob: (job: Job) => void;
  removeJob: (jobId: string) => void;
  saveSearch: (search: SavedSearch) => void;
  removeSearch: (searchId: string) => void;
  trackApplication: (jobId: string) => void;
  updateApplicationStatus: (jobId: string, status: string) => void;
}

export const useJobStore = create<JobStore>()(
  persist(
    (set) => ({
      savedJobs: [],
      savedSearches: [],
      applications: [],

      saveJob: (job) =>
        set((state) => ({
          savedJobs: [...state.savedJobs, job]
        })),

      removeJob: (jobId) =>
        set((state) => ({
          savedJobs: state.savedJobs.filter((job) => job.id !== jobId)
        })),

      saveSearch: (search) =>
        set((state) => ({
          savedSearches: [...state.savedSearches, search]
        })),

      removeSearch: (searchId) =>
        set((state) => ({
          savedSearches: state.savedSearches.filter(
            (search) => search.id !== searchId
          )
        })),

      trackApplication: (jobId) =>
        set((state) => ({
          applications: [
            ...state.applications,
            { jobId, status: 'applied', appliedAt: new Date() }
          ]
        })),

      updateApplicationStatus: (jobId, status) =>
        set((state) => ({
          applications: state.applications.map((app) =>
            app.jobId === jobId ? { ...app, status } : app
          )
        }))
    }),
    {
      name: 'job-store'
    }
  )
);