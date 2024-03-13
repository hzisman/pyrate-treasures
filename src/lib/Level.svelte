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


<div class="level">
    
    <div id="code-area">
        <CodeArea index={index} title={title} explanation={description} starterCode="arrray" />
    </div>
    
    
    <div id="island-area">
        <OceanBackground />
        <Map rows={rows} cols={cols} selected={selected} />
    </div>
</div>


<style>
    .level {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
    
    #code-area {
        width: 50%;
        height: 100%;
    }

    #island-area {
        width: 50%;
        height: 100%;
    }

</style>