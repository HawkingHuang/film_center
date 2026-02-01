import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../utils/apiUtils";

export const useMovieDetail = (id?: string) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetail(id ?? ""),
    enabled: Boolean(id),
  });
