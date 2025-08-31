export type Photo = {
  id: string;
  title: string;
  src: string;   // public/ path or URL
  alt?: string;
};

export const photos: Photo[] = [
  { id: 'p1', title: 'Ocean Mist', src: '/photos/sample1.jpg', alt: 'Blue ocean with mist' },
  { id: 'p2', title: 'City Lights', src: '/photos/sample2.jpg', alt: 'Skyline at night' },
];
