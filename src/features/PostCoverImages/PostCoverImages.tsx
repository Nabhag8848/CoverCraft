import { h, JSX } from "preact";
import FileUpload from "../../component/FileUpload";
import {
  Bold,
  Button,
  Divider,
  LoadingIndicator,
  MiddleAlign,
  Stack,
} from "@create-figma-plugin/ui";
import { useState } from "preact/hooks";
import { useFileUpload } from "../../../hooks/useFileUpload";
import { usePosts } from "./usePosts";
import PostsDropdown from "../../component/PostsDropdown";
import { useHashnodeUpload } from "./useHashnodeUpload";
function PostCoverImages() {
  const [image, setImage] = useState("");
  const { data, isPostsError, isPostsLoading } = usePosts();
  const [option, setOption] = useState<string | null>(null);
  const [decodedImage, setDecodedImage] = useState<Uint8Array | null>(null);
  const { uploadCoverImage, isImageUploading } = useFileUpload(
    option as string
  );
  const { isSettingError, isSettingImageLoading } = useHashnodeUpload();

  const disableSetButton =
    image === "" || option === null || decodedImage === null;

  function handleSetCoverImage(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    if (disableSetButton) return;
    uploadCoverImage(decodedImage);
  }

  if (isPostsLoading || isSettingImageLoading)
    return (
      <MiddleAlign>
        <LoadingIndicator />
      </MiddleAlign>
    );
  // later handle error
  if (isPostsError || isSettingError) return <h4>Error</h4>;

  return (
    <div>
      <Stack space="large">
        <Divider />
        <FileUpload
          image={image}
          setImage={setImage}
          setDecodedImage={setDecodedImage}
        />
        <Divider />
        <PostsDropdown data={data} setOption={setOption} option={option} />
        <Divider />
        <Button
          fullWidth
          onClick={handleSetCoverImage}
          style={{ marginTop: "25px" }}
          disabled={disableSetButton}
          secondary={disableSetButton}
          loading={isImageUploading}
        >
          <Bold>Set as Cover</Bold>
        </Button>
      </Stack>
    </div>
  );
}

export default PostCoverImages;
