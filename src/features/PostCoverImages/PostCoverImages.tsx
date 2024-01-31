import { Fragment, h, JSX } from "preact";
import FileUpload from "../../component/FileUpload";
import {
  Bold,
  Button,
  Divider,
  LoadingIndicator,
  MiddleAlign,
  Muted,
  Stack,
} from "@create-figma-plugin/ui";
import { useState } from "preact/hooks";
import { useFileUpload } from "../../../hooks/useFileUpload";
import { usePosts } from "./usePosts";
import PostsDropdown from "../../component/PostsDropdown";
import { useHashnodeUpload } from "./useHashnodeUpload";
import { emit } from "@create-figma-plugin/utilities";
import { DeleteAccessToken, ErrorHandler, ShowMessage } from "../../types";
import { useAuth } from "../Auth/AuthContext";
function PostCoverImages() {
  const [image, setImage] = useState("");
  const { data, isPostsError, isPostsLoading } = usePosts();
  const [option, setOption] = useState<string | null>(null);
  const [decodedImage, setDecodedImage] = useState<Uint8Array | null>(null);
  const { setToken } = useAuth();

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

  if (isPostsError || isSettingError) {
    if (isPostsError?.graphQLErrors[0].extensions.code === "UNAUTHENTICATED") {
      emit<DeleteAccessToken>("DELETE_ACCESS_TOKEN");
      emit<ShowMessage>(
        "SHOW_MESSAGE",
        "Invalid Access Token, please validate again!"
      );
      setToken("");
      return <div></div>;
    }
    
    console.log("Error", isPostsError?.graphQLErrors, isSettingError);
    emit<ShowMessage>(
      "SHOW_MESSAGE",
      "We are facing some issues, please try again later!"
    );
    return <Fragment></Fragment>;
  }

  return (
    <Stack space="large">
      <Divider />
      <FileUpload
        image={image}
        setImage={setImage}
        setDecodedImage={setDecodedImage}
      />
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
      <Divider />
      <Muted style={{ marginLeft: "31%" }}>Powered by Hashnode</Muted>
    </Stack>
  );
}

export default PostCoverImages;
