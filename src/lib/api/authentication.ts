import { writable } from "svelte/store";

export const tokenNameMap = writable(new Map<string, string>);
