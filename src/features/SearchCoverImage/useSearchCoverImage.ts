import { useMutation } from "@tanstack/react-query";
import { getCoverImages as getCoverImagesApi } from "../../../services/apiCoverImage";

export function useSearchCoverImage() {
  const {
    mutate: searchCoverImage,
    isPending: isSearching,
    error: isSearchingError,
  } = useMutation({
    mutationFn: getCoverImagesApi,
    mutationKey: ["search-cover-image"],
  });

  return { isSearching, searchCoverImage, isSearchingError };
}
