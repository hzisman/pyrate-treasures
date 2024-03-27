<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './components/Home.svelte'
    import Level from "./components/Level.svelte";
</script>

<main>
    <Router>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/:level" let:params>
            <Level level={+params.level} />
        </Route>
    </Router>
</main>