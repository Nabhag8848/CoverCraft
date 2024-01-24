import {
  Bold,
  Dropdown,
  DropdownOptionValue,
  LoadingIndicator,
} from "@create-figma-plugin/ui";
import { Fragment, h, JSX } from "preact";
import { useState } from "preact/hooks";
import { IoBookSharp } from "react-icons/io5";
import { getListOfDrafts } from "../features/PostCoverImages/useDrafts";

function DraftsDropdown({ data }) {
  const [value, setValue] = useState<string | null>(null);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  }
  
  const options: Array<DropdownOptionValue> = getListOfDrafts(data);

  return (
    <Fragment>
      <Bold style={{ marginLeft: "2px" }}>Draft</Bold>
      <Dropdown
        icon={
          <div style={{ paddingTop: "8px" }}>
            <IoBookSharp />
          </div>
        }
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
        style={{ height: "35px", marginTop: "3px" }}
        placeholder="Select Draft"
      />
    </Fragment>
  );
}

export default DraftsDropdown;
