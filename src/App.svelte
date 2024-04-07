<script>
    import Router from 'svelte-spa-router';
    import Home from './components/Home.svelte'
    import Level from './components/Level.svelte';
    import EndPage from './components/EndPage.svelte';

    const routes = {
        '/': Home,
        '/levels/:level': Level,
        '/end': EndPage,
    }
</script>

<main>
    <Router {routes} />
</main>