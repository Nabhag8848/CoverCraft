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
import DraftsDropdown from "../../component/DraftsDropdown";
import { useDrafts } from "./useDrafts";
import { useState } from "preact/hooks";
import { useFileUpload } from "../../../hooks/useFileUpload";
function PostCoverImages() {
  const [image, setImage] = useState("");
  const { data, isDraftError, isDraftLoading } = useDrafts();
  const [option, setOption] = useState<string | null>(null);
  const [decodedImage, setDecodedImage] = useState<Uint8Array | null>(null);
  const { uploadCoverImage, isImageUploading } = useFileUpload();
  const disableSetButton =
    image === "" || option === null || decodedImage === null;

  function handleSetCoverImage(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    if (disableSetButton) return;
    uploadCoverImage(decodedImage);
  }

  if (isDraftLoading)
    return (
      <MiddleAlign>
        <LoadingIndicator />
      </MiddleAlign>
    );
  // later handle error
  if (isDraftError) return <h4>Error</h4>;

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
        <DraftsDropdown data={data} setOption={setOption} option={option} />
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
