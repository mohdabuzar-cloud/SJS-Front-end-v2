import { useMutation } from "@tanstack/react-query";
import { applyToJob } from "@/services/api/apply-job";

export function useApplyJob() {
  return useMutation({
    mutationFn: applyToJob,
  });
}