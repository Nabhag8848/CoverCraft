import { gql, useMutation } from "@apollo/client";
import { CloseHandler, ErrorHandler } from "../../types";
import { emit } from "@create-figma-plugin/utilities";

const UPLOAD_COVER_IMAGE = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      post {
        id
        coverImage {
          url
          isPortrait
        }
      }
    }
  }
`;

interface IUpdateCoverImageInput {
  input: {
    id: string;
    coverImageOptions: {
      coverImageURL: string;
    };
  };
}

export function useHashnodeUpload() {
  const [
    uploadImageToHashnode,
    {
      data: coverImagePayload,
      loading: isSettingImageLoading,
      error: isSettingError,
    },
  ] = useMutation(UPLOAD_COVER_IMAGE, {
    onCompleted() {
      emit<CloseHandler>("CLOSE");
    },
    onError(error) {
      emit<ErrorHandler>("ERROR", error.message);
    },
  });

  return {
    uploadImageToHashnode,
    coverImagePayload,
    isSettingError,
    isSettingImageLoading,
  };
}
