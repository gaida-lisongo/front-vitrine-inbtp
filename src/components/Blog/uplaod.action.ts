"use server";

import { put } from "@vercel/blob";

export const upload = async (folder: string, file: File) => {
  console.log(file);
  const data = {
    filename: `${folder}/${file.name}`,
    size: file.size,
    file: file
  };

  const blob = await put(data.filename, file, { 
    access: "public",
    token: "vercel_blob_rw_UjimgJlxAOXHk6Kc_diCCt7m888bwt2Wsj1JMW9zEAbVKH6"
  });
  
  return blob.url;

};