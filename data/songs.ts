export type Song = {
  id: string;
  title: string;
  artist: string;
  cover: string;   // public/ path or URL
  audio: string;   // public/ path or URL
};

export const songs: Song[] = [
  {
    id: 's1',
    title: 'Midnight Drive',
    artist: 'Nova',
    cover: '/covers/cover1.jpg',
    audio: '/audio/sample1.mp3',
  },
  {
    id: 's2',
    title: 'Quiet Sky',
    artist: 'Ember',
    cover: '/covers/cover2.jpg',
    audio: '/audio/sample2.mp3',
  },
];
