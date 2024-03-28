<script>
    import { link } from 'svelte-spa-router';

    let className = '';
    export { className as class };
</script>

<div class="home-link {className} relative">
    <a use:link href="/" class="opacity-50 hover:opacity-100 transition-all outline outline-water-600 bg-brown-400 border-water-500 border size-7 rounded-full flex justify-center items-center">
        <img src="images/scribles/scrible0.png" alt="scrible" class="h-4" />
        <img src="images/tree.png" alt="tree" class="h-4 absolute hover:[animate-swing]" />
    </a>
</div>

<style lang="postcss">
    .home-link:hover img[alt="tree"] {
        animation: swing ease-in-out 0.5s infinite alternate;
    }
</style>
