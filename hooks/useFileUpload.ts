import { useMutation } from "@tanstack/react-query";
import { uploadCoverImage as uploadCoverImageApi } from "../services/apiStorage";
import { useHashnodeUpload } from "../src/features/PostCoverImages/useHashnodeUpload";

const SUPABASE_STORAGE_DOMAIN_PATH = `https://jrrpxgtuiarderxironm.supabase.co/storage/v1/object/public/`;

export function useFileUpload(id: string) {
  const { uploadImageToHashnode } = useHashnodeUpload();
  const { mutate: uploadCoverImage, isPending: isImageUploading } = useMutation(
    {
      mutationFn: uploadCoverImageApi,
      onSuccess: (data: any) => {
        const fullPath = data.fullPath as string;
        const coverImageURL = `${SUPABASE_STORAGE_DOMAIN_PATH}${fullPath}`;
        uploadImageToHashnode({
          variables: {
            input: {
              id,
              coverImageOptions: {
                coverImageURL,
              },
            },
          },
        });
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return { uploadCoverImage, isImageUploading };
}
