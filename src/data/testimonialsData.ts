// Testimonials data for the portfolio
// Ari Andika Febrian - Mobile & Fullstack Developer

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  image?: string;
  quote: string;
  rating?: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Rifani',
    role: 'SEO Specialist',
    quote: 'Kerja sama dengan Ari sangat menyenangkan. Hasil kerjanya bagus, rapih, dan sudah mantep. Jika ada project lagi, pasti akan kembali dikerjakan olehnya. Sangat recommended!',
    rating: 5,
  },
];

export const getAverageRating = (): number => {
  if (testimonialsData.length === 0) return 0;
  const totalRating = testimonialsData.reduce((sum, t) => sum + (t.rating || 5), 0);
  return totalRating / testimonialsData.length;
};

