import { writable } from 'svelte/store';

export const currentlySelectedCells = writable([]);
export const newWrongSelection = writable(false);
export const correctSelection = writable(false);

newWrongSelection.subscribe(console.log);