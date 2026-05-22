import { useQuery } from "@tanstack/react-query";
import { fetchSavedJobs } from "@/services/api/saved-jobs";

export function useSavedJobs() {
  return useQuery({
    queryKey: ["saved-jobs"],
    queryFn: fetchSavedJobs,
  });
}