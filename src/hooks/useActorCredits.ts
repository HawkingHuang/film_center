import { useQuery } from "@tanstack/react-query";
import { fetchActorCredits } from "../utils/apiUtils";

export const useActorCredits = (id?: string) =>
  useQuery({
    queryKey: ["actor", id, "credits"],
    queryFn: () => fetchActorCredits(id ?? ""),
    enabled: Boolean(id),
  });
