import { useQuery } from "@tanstack/react-query";
import { fetchAppliedJobs } from "@/services/api/applied-jobs";

export function useAppliedJobs(
  page = 1
) {
  return useQuery({
    queryKey: ["applied-jobs", page],
    queryFn: () =>
      fetchAppliedJobs(page),
  });
}