<script>
    import { Router, Route } from 'svelte-routing';
    import Level from "./lib/Level.svelte";
    import { loadPyodideWithModules } from './utils/pyodide_utils';
</script>

<main>
    <Router>
        <Route path="/:level" let:params>
            <Level level={params.level} />
        </Route>
    </Router>
</main>