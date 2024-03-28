<script>
    import Router from 'svelte-spa-router';
    import Home from './components/Home.svelte'
    import Level from './components/Level.svelte';

    const routes = {
        '/': Home,
        '/:level': Level,
    }
</script>

<main>
    <Router {routes} />
</main>