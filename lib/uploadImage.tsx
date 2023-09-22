import React from 'react'

import {ID, storage} from "@/appwrite";

const uploadImage = async (file: File) =>{
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "6502297bbdc437d6f997",
    ID.unique(),
    file
  );
  return fileUploaded;
}

export default uploadImage;