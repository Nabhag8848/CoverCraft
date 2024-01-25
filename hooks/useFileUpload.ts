import { useMutation } from "@tanstack/react-query";
import { uploadCoverImage as uploadCoverImageApi } from "../services/apiStorage";

export function useFileUpload() {
  const { mutate: uploadCoverImage, isPending: isImageUploading } = useMutation(
    {
      mutationFn: uploadCoverImageApi,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.error(error)
      }
    }
  );

  return { uploadCoverImage, isImageUploading };
}
