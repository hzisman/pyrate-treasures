<script>
	import CodeArea from "./CodeArea.svelte";
	import Map from "./Map.svelte";
    import OceanBackground from "./OceanBackground.svelte";
    import { getLevelDetails } from "../levels";

    export let level;

    $: levelDetails = getLevelDetails(level);
</script>


<div class="h-[100vh] flex flex-col md:flex-row">
    <div class="h-1/2 w-full bg-water-50 md:w-1/2 md:h-full">
        <CodeArea level={level} {...levelDetails} />
    </div>
    
    <div class="h-1/2 w-full md:w-1/2 md:h-full" >
        <OceanBackground />
        <Map {...levelDetails} />
    </div>
</div>
