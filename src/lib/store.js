import { writable } from 'svelte/store';

export const currentlySelectedCells = writable([]);
export const newWrongSelection = writable(false);
export const correctSelection = writable(false);
export const progress = writable(JSON.parse(localStorage.numpySlicingGame ?? '{}'));

progress.subscribe(value => localStorage.numpySlicingGame = JSON.stringify(value));
