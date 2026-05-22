import {
  useMutation,
} from "@tanstack/react-query";

import {
  addExperience,
} from "@/services/api/profile/experience";

export function useAddExperience() {
  return useMutation({
    mutationFn: addExperience,
  });
}