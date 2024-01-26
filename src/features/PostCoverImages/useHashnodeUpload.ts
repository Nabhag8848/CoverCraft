import { gql, useMutation } from "@apollo/client";

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
    onCompleted(data, clientOptions) {
      console.log(data, clientOptions);
    },
  });

  return {
    uploadImageToHashnode,
    coverImagePayload,
    isSettingError,
    isSettingImageLoading,
  };
}
