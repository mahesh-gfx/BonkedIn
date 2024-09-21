import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ScheduledPost } from '@/types/post';

interface PostStore {
  scheduledPosts: ScheduledPost[];
  addScheduledPost: (post: ScheduledPost) => void;
  updateScheduledPost: (id: string, updates: Partial<ScheduledPost>) => void;
  deleteScheduledPost: (id: string) => void;
  publishPost: (id: string) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      scheduledPosts: [],

      addScheduledPost: (post) =>
        set((state) => ({
          scheduledPosts: [...state.scheduledPosts, post]
        })),

      updateScheduledPost: (id, updates) =>
        set((state) => ({
          scheduledPosts: state.scheduledPosts.map((post) =>
            post.id === id ? { ...post, ...updates, updatedAt: new Date() } : post
          )
        })),

      deleteScheduledPost: (id) =>
        set((state) => ({
          scheduledPosts: state.scheduledPosts.filter((post) => post.id !== id)
        })),

      publishPost: (id) =>
        set((state) => ({
          scheduledPosts: state.scheduledPosts.map((post) =>
            post.id === id ? { ...post, status: 'published' } : post
          )
        }))
    }),
    {
      name: 'post-store'
    }
  )
);