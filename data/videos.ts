export type Video = {
  id: string;
  title: string;
  embedUrl: string; // e.g., YouTube embed
};

export const videos: Video[] = [
  { id: 'v1', title: 'Launch Day', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'v2', title: 'Studio Session', embedUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
];
