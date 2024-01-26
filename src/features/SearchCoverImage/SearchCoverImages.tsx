import { h } from "preact";
import styles from "./search_style.css";
import {
  Button,
  Columns,
  LoadingIndicator,
  Textbox,
} from "@create-figma-plugin/ui";
import { useEffect, useState } from "preact/hooks";
import ImageComponent from "../../component/ImageComponent";

const SearchCoverImages = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getImages("illustration mountains");
  }, []);

  async function getImages(query: string) {
    setError(undefined);
    setImages([]);
    try {
      setLoading(true);
      const res = await fetch(`https://lexica.art/api/v1/search?q=${query}`);
      const data = await res.json();

      console.log(data);
      if (data == undefined) return;

      let imagesList: string[] = [];
      data.images.map((image: { src: string }) => {
        imagesList.push(image.src);
      });

      setLoading(false);
      setImages(imagesList);
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
    }
  }

  return (
    <div>
      <Columns style={{ marginTop: "20px" }}>
        <Textbox
          style={{
            width: "220px",
            height: "35px",
          }}
          onChange={(e) => setQuery(e.currentTarget.value)}
          value={query}
          placeholder="Enter a query"
          autofocus
        />
        <div style={{ width: "10px" }}></div>
        <Button
          style={{
            height: "35px",
          }}
          onClick={() => getImages(query)}
        >
          Search
        </Button>
      </Columns>

      <div style={{ height: "20px" }}></div>
      {loading && !error && (
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
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50%",
          }}
        >
          <p>{error}</p>
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
        {!error &&
          images.map((image) => {
            return <ImageComponent url={image} className={styles.image} />;
          })}
      </div>
    </div>
  );
};

export default SearchCoverImages;
