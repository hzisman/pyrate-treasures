<script>
    import { fade } from 'svelte/transition'

	import CodeArea from './CodeArea.svelte';
	import Map from './Map.svelte';
    import OceanBackground from './OceanBackground.svelte';
    import { getLevelDetails } from '../lib/level';
    import { loadPyodideWithModules } from '../lib/pyodide_utils';
    import CompassLoading from './CompassLoading.svelte';
    import HomeLink from './HomeLink.svelte';

    export let level;

    $: levelDetails = getLevelDetails(level);
</script>

{#await loadPyodideWithModules('numpy')}
	<div transition:fade={{ delay: 100 }} class="absolute z-50">
        <CompassLoading />
    </div>
{/await}
    

<div class="h-[100vh] flex flex-col md:flex-row">
    <div class="h-1/2 w-full bg-water-50 overflow-auto pb-6 md:w-1/2 md:h-full">
        <HomeLink class="top-4 left-4" />
        <CodeArea level={level} {...levelDetails} />
    </div>

    <div class="h-1/2 w-full md:w-1/2 md:h-full bg-water-800" >
        <OceanBackground class="absolute h-1/2 md:h-full w-full" />
        <Map {...levelDetails} />
    </div>
</div>
