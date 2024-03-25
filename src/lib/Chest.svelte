<script>
    import { rand } from "../utils/rand";
    
    let className = '';
    export { className as class };
    
    let coinCount = 10;
    
    const TOP_BOUNDRIES = [45, 60];
    const LEFT_BOUNDRIES = [5, 85];
</script>
<!-- <script>



</script>

<div class={className}>
</div> -->

<div class="{className} ">
    <img src="images/chest.png" alt="chest" class="drop-shadow-xl h-[20vh]"/>
    {#each { length: coinCount } as _}
        <img src="images/coin.png" alt="coin" style="top: {rand(...TOP_BOUNDRIES)}%; left: {rand(...LEFT_BOUNDRIES)}%;" class="absolute h-6 animate-bounce"/>
    {/each}
</div>

<button on:click={() => coinCount += 1}>Add Coin</button>

