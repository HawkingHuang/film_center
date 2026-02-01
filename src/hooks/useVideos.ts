import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "../utils/apiUtils";

export const useVideos = (id?: string) =>
  useQuery({
    queryKey: ["movie", id, "videos"],
    queryFn: () => fetchVideos(id ?? ""),
    enabled: Boolean(id),
  });
