import supabase from "./supabase";
import { uuid } from "../helper/uuid";

export async function uploadCoverImage(Uint8ArrayImage: Uint8Array) {
  const imageName = `${uuid()}.png`;
  const imagePath = `./${imageName}`;

  const { data } = await supabase.storage
    .from("cover-images")
    .upload(imagePath, Uint8ArrayImage.buffer);

  return data;
}
