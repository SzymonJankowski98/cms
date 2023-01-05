import { writable } from "svelte/store";
import { EMPTY } from "$lib/pageEditor";

export const TYPE_PICKER = "typePicker";
export const EDIT_DETAILS = "editDetails";
export const MODES = [TYPE_PICKER, EDIT_DETAILS];

const initialValue = {
  visible: false,
  currentRow: 0,
  currentColumn: 0,
  currentType: EMPTY,
  mode: TYPE_PICKER
}

export const EditColumnModalStore = writable(initialValue);

export function hideModal() {
  EditColumnModalStore.update((modal) => {
    modal.visible = false;
    return modal;
  });
};

export function showModal(rowIndex: number, columnIndex: number) {
  EditColumnModalStore.update((modal) => {
    modal.visible = true;
    modal.currentRow = rowIndex;
    modal.currentColumn = columnIndex;
    return modal;
  });
};

export function pickCurrentType(type: string) {
  EditColumnModalStore.update((modal) => {
    modal.currentType = type;
    return modal;
  });
}

export function showEditDetails() {
  EditColumnModalStore.update((modal) => {
    modal.mode = EDIT_DETAILS;
    return modal;
  });
}

export function showTypePicker() {
  EditColumnModalStore.update((modal) => {
    modal.mode = TYPE_PICKER;
    return modal;
  });
}