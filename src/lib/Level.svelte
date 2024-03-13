<script>
	import CodeArea from "./CodeArea.svelte";
	import Map from "./Map.svelte";
    import OceanBackground from "./OceanBackground.svelte";

    export let index;
    
    export let title;
    export let description;

    export let rows;
    export let cols;
    export let selected;
</script>


<div class="flex h-[100vh]">
    <div class="h-full bg-water-50 ">
        <CodeArea index={index} title={title} explanation={description} codePrefix="array" />
    </div>
    
    
    <div class="h-full w-1/2">
        <OceanBackground />
        <Map rows={rows} cols={cols} selected={selected} />
    </div>
</div>
