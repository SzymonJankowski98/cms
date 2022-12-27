import { writable } from "svelte/store";

import { defaultPageContent, addColumnToRow } from "./pageEditor";

export const PageEditorStore = writable(defaultPageContent);

export function addColumn(rowIndex: number) {
  PageEditorStore.update((page) => addColumnToRow(page, rowIndex));
}