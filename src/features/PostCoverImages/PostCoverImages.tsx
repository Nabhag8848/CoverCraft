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
function PostCoverImages() {
  const [image, setImage] = useState("");
  const { data, isDraftError, isDraftLoading } = useDrafts();
  const [option, setOption] = useState<string | null>(null);
  const disableSetButton = image === "" || option === null;

  function handleSetCoverImage(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {

    if(disableSetButton) return;
    console.log(image);
    console.log(option);
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
        <FileUpload image={image} setImage={setImage} />
        <Divider />
        <DraftsDropdown data={data} setOption={setOption} option={option} />
        <Divider />
        <Button
          fullWidth
          onClick={handleSetCoverImage}
          style={{ marginTop: "25px" }}
          disabled={disableSetButton}
          secondary={disableSetButton}
        >
          <Bold>Set as Cover</Bold>
        </Button>
      </Stack>
    </div>
  );
}

export default PostCoverImages;
