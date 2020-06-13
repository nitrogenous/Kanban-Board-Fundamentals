import React from "react";
import { CategoryProvider } from "./CategoryProvider";
import { DragAndDropProvider } from "./DragAndDropProvider";

export const Providers = ({ children }) => (
	<CategoryProvider>
		<DragAndDropProvider> {children} </DragAndDropProvider>
	</CategoryProvider>
);
