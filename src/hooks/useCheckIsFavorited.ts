import { useQuery } from "@tanstack/react-query";
import { checkIsFavorited } from "../utils/favoritesUtils";

export const useCheckIsFavorited = (movieId: number | null, isAuthenticated: boolean) =>
  useQuery({
    queryKey: ["favorites", "isFavorited", movieId],
    queryFn: () => checkIsFavorited(movieId as number),
    enabled: Boolean(movieId) && isAuthenticated,
  });
