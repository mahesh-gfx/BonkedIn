export interface Post {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    title: string;
  };
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
  aiScore?: number;
}