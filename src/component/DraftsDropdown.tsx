import {
  Bold,
  Dropdown,
  DropdownOptionValue,
  LoadingIndicator,
} from "@create-figma-plugin/ui";
import { Fragment, h, JSX } from "preact";
import { IoBookSharp } from "react-icons/io5";
import { getListOfDrafts } from "../features/PostCoverImages/useDrafts";

function DraftsDropdown({ data, option, setOption }) {
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOption = event.currentTarget.value;
    setOption(newOption);
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
        value={option}
        variant="border"
        style={{ height: "35px", marginTop: "10px" }}
        placeholder="Select Draft"
      />
    </Fragment>
  );
}

export default DraftsDropdown;
