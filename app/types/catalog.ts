export interface Catalog {
  title: string
  id?: number
  description: string
  slug: string
  imageUrl: string
  content: { id: number; title: string, description: string, youtubeId: string, slug: string }[]
}
export interface Content {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  year?: number | null;
  genre?: string;
  slug: string;
  rating?: number;
  catalogId?: number | null;
}