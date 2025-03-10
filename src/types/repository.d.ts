export interface Repository {
  html_url: string | undefined;
  id: number;
  name: string;
  description: string;
  visibility: 'public' | 'private';
  owner: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
}