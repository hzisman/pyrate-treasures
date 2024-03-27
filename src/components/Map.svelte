<script>
	import { fade } from 'svelte/transition';
	import { blowOut } from '../transition/blow'

	import Coin3D from './Coin3D.svelte';

	import { createDisplayMap, createMap, isSelected } from '../lib/map';
	import { rand, randInt } from '../lib/rand';
	import { currentlySelectedCells, newWrongSelection, correctSelection } from '../lib/store';
	import { MID_BREAKPOINT, MAP_AREA } from '../config';

	export let rows;
	export let cols;

	export let selected;

	$: map = createMap(rows, cols, selected);
    $: displayMap = createDisplayMap(map);
		
	let { innerWidth, innerHeight } = window;
	$: mapAreaHeight = innerWidth < MID_BREAKPOINT ? innerHeight / 2 : innerHeight;
	$: mapAreaWidth = innerWidth < MID_BREAKPOINT ? innerWidth : innerWidth / 2;
	$: cellSize = Math.floor(Math.min(mapAreaHeight * MAP_AREA / (rows + 1), mapAreaWidth * MAP_AREA / (cols + 1)));
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div style="--cell-size: {cellSize}px; --rows: {rows}; --cols: {cols};" class="flex justify-center items-center h-full">
	<div class="map relative border-water-600 rounded-xl" style="border-width: min(40px, 3vw)">
		<div class="island grid z-10 relative">
			<div class="cell top-index-cell left-index-cell" />
			{#each { length: cols } as _, i}
				<div class="cell top-index-cell">{i}</div>
			{/each}
			<div class="cell top-index-cell right-index-cell" />

            <!-- The map itself -->
			{#each map as row, i}
            	<div class="cell left-index-cell">{i}</div>
				{#each row as _, j}
					<div class="cell relative">
						{#if isSelected(selected, cols, i, j)}
							<div class="flex justify-center items-center h-full">
								{#if $correctSelection}
									<div in:fade={{ delay: 1000 }} class="absolute drop-shadow-xl" style="transform: scale({cellSize/2}%)">
										<Coin3D />
									</div>
								{/if}

								{#if !$correctSelection}
									<img src="images/scribles/scrible{randInt(6)}.png" out:fade={{duration: 2000}} alt="scrible" style="rotate: {rand(360)}deg" class="scrible" />
									<div out:blowOut class="absolute">
										<img src="images/tree.png" alt="tree" class="tree drop-shadow-md animate-swing" />
									</div>
								{/if}

							</div>	
						{/if}
						{#if $newWrongSelection && isSelected($currentlySelectedCells, cols, i, j)}
							<div  class="animate-scale-fade opacity-0 top-0 size-cellsize absolute bg-red-400 rounded-full"></div>
						{/if}
					</div>	
				{/each}
                <div class="cell right-index-cell" />
			{/each}

            <div class="cell bottom-index-cell left-index-cell" />
            {#each { length: cols } as _}
				<div class="cell bottom-index-cell" />
			{/each}
            <div class="cell bottom-index-cell right-index-cell" />

		</div>

		<div class="display-island">
			{#each displayMap as row}
				{#each row as [tile, rotation]}
					<div 
						class="display-cell" 
						style="
							background-image: url(images/tiles/tile{tile}.svg); 
							rotate: calc(90deg * {rotation});
						"
					/>
				{/each}
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">

	:root {
		--drop-shadow-lg: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	}

	.island {
		grid-template-rows: calc(var(--cell-size) / 2) repeat(var(--rows), var(--cell-size)) calc(var(--cell-size) / 2);
        grid-template-columns: calc(var(--cell-size) / 2) repeat(var(--cols), var(--cell-size)) calc(var(--cell-size) / 2);
	}

	.cell {
		border-image: url(images/dotted_border.png) 30 round;
		@apply 
			h-cellsize w-cellsize align-middle leading-cellsize
			font-mono text-center text-water-100
			border-r-transparent border-solid border-0;
	}

	.top-index-cell, .bottom-index-cell {
		height: calc(var(--cell-size) / 2);
		line-height: calc(var(--cell-size) / 2);
	}

	.cell:not(.top-index-cell) {
		border-top-width: 3px;
	}

	.cell:not(.left-index-cell) {
		border-left-width: 3px;
	}

	.left-index-cell, .right-index-cell {
		width: calc(var(--cell-size) / 2);
	}

    .right-index-cell, .bottom-index-cell {
		@apply bg-water-500;
    }

	.display-island {
		grid-template-rows: repeat(calc(var(--rows) + 1), 1fr);
		grid-template-columns: repeat(calc(var(--cols) + 1), 1fr);
		@apply grid absolute top-0 left-0;
	}

	.display-cell {
		height: var(--cell-size);
		width: var(--cell-size);
		background-size: cover;
	}

	.scrible {
		height: calc(var(--cell-size) / 2);
	}

	.tree {
		height: calc(var(--cell-size) / 1.8);
	}
</style>
