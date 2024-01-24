import { Tabs, TabsOption } from "@create-figma-plugin/ui";
import { h, JSX } from "preact";
import PostCoverImages from "../src/features/PostCoverImages/PostCoverImages";
import { useState } from "preact/hooks";

function Home() {
  const [option, setOption] = useState("Set Cover");
  const options: Array<TabsOption> = [
    {
      children: <div>Search Cover</div>,
      value: "Search Cover",
    },
    {
      children: <PostCoverImages />,
      value: "Set Cover",
    },
    {
      children: <div>History</div>,
      value: "History",
    },
  ];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOption = event.currentTarget.value;
    setOption(newOption);
  }
  return (
    <div>
      <Tabs onChange={handleChange} options={options} value={option} />
    </div>
  );
}

export default Home;
