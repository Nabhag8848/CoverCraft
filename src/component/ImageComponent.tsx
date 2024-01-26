import { h } from "preact";
import { emit } from "@create-figma-plugin/utilities";
import { InsertInBoard } from "../types";

const ImageComponent = ({
  url,
  className,
}: {
  url: string;
  className: string;
}) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <img
        className={className}
        onClick={async () => {
          emit<InsertInBoard>("INSERT_IN_BOARD", url);
        }}
        src={url}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default ImageComponent;
