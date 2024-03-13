<script>
    import Level from "./lib/Level.svelte";

</script>

<main>
    <Level
        index={1}
        title="Single Element"
        description="To choose an element use square brackets and then the row and the column seperated by comma."
        rows={4}
        cols={5}
        selected={[[2, 3], [3, 4]]}
    />
</main>