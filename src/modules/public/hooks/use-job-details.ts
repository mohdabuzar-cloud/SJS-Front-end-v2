import { useQuery } from "@tanstack/react-query";
import { fetchJobDetails } from "@/services/api/job-details";

export function useJobDetails(id: string) {
  return useQuery({
    queryKey: ["job-details", id],
    queryFn: () => fetchJobDetails(id),
    enabled: !!id,
  });
}