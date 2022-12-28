import { writable } from "svelte/store";

import { 
  defaultPageContent,
  addRow as EditorAddRow,
  deleteRow as EditorDeleteRow,
  addColumn as EditorAddColumn,
  deleteColumn as EditorDeleteColumn
} from "./pageEditor";

export const PageEditorStore = writable(defaultPageContent);

export function addRow(rowIndex: number) {
  PageEditorStore.update((page) => EditorAddRow(page, rowIndex));
};

export function deleteRow(rowIndex: number) {
  PageEditorStore.update((page) => EditorDeleteRow(page, rowIndex));
};

export function addColumn(rowIndex: number) {
  PageEditorStore.update((page) => EditorAddColumn(page, rowIndex));
};

export function deleteColumn(rowIndex: number, columnIndex: number) {
  PageEditorStore.update((page) => EditorDeleteColumn(page, rowIndex, columnIndex));
};
