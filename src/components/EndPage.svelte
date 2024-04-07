<script>
    import HomeLink from "./HomeLink.svelte";
    import { coinCount, levels } from "../levels";
    import { progress } from "../lib/store";

    const foundCoins = Object
        .keys($progress)
        .map(levelNumber => levels[levelNumber].selected.length)
        .reduce((prev, cur) => prev + cur);
</script>

<h1 class="red text-3xl">
    You found {foundCoins}/{coinCount}
</h1>
<div>
    Return To the game:
    <HomeLink />
</div>