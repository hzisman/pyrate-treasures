<script>
    import { Router, Route } from 'svelte-routing';
    import Level from "./lib/Level.svelte";
</script>

<main>
    <Router>
        <Route path="/:level" let:params>
            <Level level={Number(params.level)} />
        </Route>
    </Router>
</main>