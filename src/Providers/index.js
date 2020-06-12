import React from "react";
import { DragAndDropProvider } from "./DragAndDrop";

export const Providers = ({ children }) => {
  return <DragAndDropProvider> {children} </DragAndDropProvider>;
};
