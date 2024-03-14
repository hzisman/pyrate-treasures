// hello_python.js
import { loadPyodide } from "pyodide";

async function hello_python() {
    let pyodide = await loadPyodide({
        indexURL: "pyodide",
    });
    return pyodide.runPythonAsync("1+1");
}

hello_python().then((result) => {
    console.log("Python says that 1+1 =", result);
});