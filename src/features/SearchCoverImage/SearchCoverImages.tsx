import { h } from "preact";
import styles from "./search_style.css";
import {
  Button,
  Columns,
  LoadingIndicator,
  Textbox,
} from "@create-figma-plugin/ui";
import { useState } from "preact/hooks";
import ImageComponent from "../../component/ImageComponent";
import { useSearchCoverImage } from "./useSearchCoverImage";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";

const SearchCoverImages = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const { isSearching, isSearchingError, searchCoverImage } =
    useSearchCoverImage();

  useEffect(function () {
    searchCoverImage("", {
      onSuccess(data) {
        setImages(data);
      },
    });
  }, []);

  return (
    <div>
      <Columns
        style={{
          marginTop: "20px",
        }}
      >
        <Textbox
          style={{
            width: "240px",
            height: "35px",
          }}
          onChange={(e) => setQuery(e.currentTarget.value)}
          value={query}
          placeholder="Search for image"
          autofocus
          variant="border"
          disabled={isSearching}
          icon={
            <div style={{ paddingTop: "8px" }}>
              <BsSearch />
            </div>
          }
        />
        <div style={{ width: "8px" }}></div>
        <Button
          style={{
            height: "35px",
          }}
          onClick={() => {
            searchCoverImage(query, {
              onSuccess(data) {
                setImages(data);
              },
            });
            setImages([]);
          }}
          disabled={isSearching || query === ""}
        >
          Search
        </Button>
      </Columns>
      <div style={{ height: "20px" }}></div>
      {isSearching && !isSearchingError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50%",
          }}
        >
          <LoadingIndicator />
        </div>
      )}
      {isSearchingError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50%",
          }}
        >
          <p>Error</p>
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "auto",
          gap: "20px",
        }}
      >
        {(!isSearchingError && !isSearching) &&
          images.map((image) => {
            return <ImageComponent url={image} className={styles.image} />;
          })}
      </div>
    </div>
  );
};

export default SearchCoverImages;
