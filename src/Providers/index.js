import React from "react";
import { DragAndDropProvider } from "./DragAndDropProvider";

export const Providers = ({ children }) => {
  return <DragAndDropProvider> {children} </DragAndDropProvider>;
};
