import React from "react";
import { CategoryEditProvider } from "./CategoryEditProvider";
import { DragAndDropProvider } from "./DragAndDropProvider";

export const Providers = ({ children }) => (
	<CategoryEditProvider>
		<DragAndDropProvider> {children} </DragAndDropProvider>
	</CategoryEditProvider>
);
