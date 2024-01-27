export async function getCoverImages(query) {
  const searchQuery = query === "" ? "illustration mountains" : query;

  const res = await fetch(`https://lexica.art/api/v1/search?q=${searchQuery}`);
  const data = await res.json();

  if (!data) {
    throw new Error("Error while fetching CoverImages");
  }

  const imagesList = data.images.map((image: { src: string }) => {
    return image.src;
  });

  return imagesList;
}
