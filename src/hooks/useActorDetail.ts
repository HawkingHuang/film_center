import { useQuery } from "@tanstack/react-query";
import { fetchActorDetail } from "../utils/apiUtils";

export const useActorDetail = (id?: string) =>
  useQuery({
    queryKey: ["actor", id],
    queryFn: () => fetchActorDetail(id ?? ""),
    enabled: Boolean(id),
  });
