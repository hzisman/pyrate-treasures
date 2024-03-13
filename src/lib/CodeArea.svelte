<script>
    export let index;
    export let title;
    export let explanation;

    export let starterCode;
</script>

<div class="bg-water-50 p-14">
    <h1>
        <span class="font-light ml-3">{index}.</span>
        <span>{title}</span>
    </h1>
    <h2>{explanation}</h2>

    <div>
        {starterCode}
    </div>
</div>
