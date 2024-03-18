import { loadPyodide } from 'pyodide'

let pyodide;
const loadedModules = [];

/**
 * @param {string[]} modules
 */
export async function loadPyodideWithModules(...modules) {
    pyodide ??= await loadPyodide({
        indexURL: './pyodide',
    });

    for (const module of modules) {
        if (!loadedModules.includes(module)) {
            loadedModules.push(module);
            await pyodide.loadPackage(module);
        }
    }

    return pyodide;
}