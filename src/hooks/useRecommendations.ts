import { useQuery } from "@tanstack/react-query";
import { fetchRecommendations } from "../utils/apiUtils";

export const useRecommendations = (id?: string) =>
  useQuery({
    queryKey: ["movie", id, "recommendations"],
    queryFn: () => fetchRecommendations(id ?? ""),
    enabled: Boolean(id),
  });
