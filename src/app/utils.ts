import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const onFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<string>>
) => {
  const inputFile = event.target.files?.[0];

  if (inputFile && inputFile?.type.startsWith("image/")) {
    const imageURL = URL.createObjectURL(inputFile);
    setState(imageURL);
  }
};
