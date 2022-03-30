import { writable } from "svelte/store";
import { data } from "./data";

export const selectedHarmonyID = writable();
export const harmonyData = writable(data);
