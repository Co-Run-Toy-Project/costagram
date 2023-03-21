import { atom } from 'recoil';

export const currPostId = atom<number | null>({
  key: 'currPostId',
  default: null,
});

interface Comment {
  userName: string;
  commentContent: string;
  createdAt: string;
  profileImage: string;
  commentId: number;
  postId: number;
}

interface SortedData {
  userName: string;
  postId: number;
  postContent: string;
  comments: Array<Comment>;
  commentCount: number;
  weather: string;
  profileImage: string;
  location: string;
  createdAt: string;
  imagePath: Array<string>;
}

export const sortedData = atom<SortedData[]>({
  key: 'sortedData',
  default: [],
});
