import { useQuery } from "@tanstack/react-query";
import { fetchCredits } from "../utils/apiUtils";

export const useCredits = (id?: string) =>
  useQuery({
    queryKey: ["movie", id, "credits"],
    queryFn: () => fetchCredits(id ?? ""),
    enabled: Boolean(id),
  });
