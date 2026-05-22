import {
  useMutation,
} from "@tanstack/react-query";

import {
  addEducation,
} from "@/services/api/profile/education";

export function useAddEducation() {
  return useMutation({
    mutationFn: addEducation,
  });
}