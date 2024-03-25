<script>
	import CodeArea from "./CodeArea.svelte";
    import Chest from './Chest.svelte';
	import Map from "./Map.svelte";
    import OceanBackground from "./OceanBackground.svelte";
    import { getLevelDetails } from "../levels";

    export let level;
    
    const chestHeight = 15; // vh
// chestClass="h-[vh]" class="absolute z-10 max-md:top-[calc(50vh-vh/2)] left-10 md:left-[calc(50vw-vh/2)] md:bottom-10"
    $: levelDetails = getLevelDetails(level);
</script>


<div class="h-[100vh] flex flex-col md:flex-row">
    <div class="h-1/2 w-full bg-water-50 md:w-1/2 md:h-full">
        <CodeArea level={level} {...levelDetails} />
    </div>

    <!-- <div class="h-full w-full absolute flex justify-center items-center z-20">
        <Chest class="relative max-md:right-[35%] md:top-[35%]" />

    </div> -->
    
    <div class="h-1/2 w-full md:w-1/2 md:h-full" >
        <OceanBackground />
        <Map {...levelDetails} />
    </div>
</div>
