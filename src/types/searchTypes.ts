export type SearchMultiResult = {
  id: number;
  media_type: "movie" | "tv" | "person";
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  profile_path?: string | null;
};

export type SearchMultiResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: SearchMultiResult[];
};
