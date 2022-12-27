import { writable } from "svelte/store";

import { 
  defaultPageContent,
  addRow as EditorAddRow,
  addColumn as EditorAddColumn
} from "./pageEditor";

export const PageEditorStore = writable(defaultPageContent);

export function addRow(rowIndex=-1) {
  PageEditorStore.update((page) => EditorAddRow(page, rowIndex));
};

export function addColumn(rowIndex: number) {
  PageEditorStore.update((page) => EditorAddColumn(page, rowIndex));
};
