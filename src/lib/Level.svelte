<script>
	import CodeArea from "./CodeArea.svelte";
	import Map from "./Map.svelte";
    import OceanBackground from "./OceanBackground.svelte";
    import { getLevelDetails } from "../levels";

    export let level;

    $: levelDetails = getLevelDetails(level);
</script>


<div class="flex h-[100vh]">
    <div class="h-full w-1/2 bg-water-50 ">
        <CodeArea level={level} {...levelDetails} />
    </div>
    
    <div class="h-full w-1/2" >
        <OceanBackground />
        <Map {...levelDetails} />
    </div>
</div>
