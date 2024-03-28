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
		border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD72lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTAzLTA5PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjVjMGU0NjEyLWUwYWUtNDNhMC05YTJiLTlkNzNjN2E0MTNiZDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5Zb3VyIHBhcmFncmFwaCB0ZXh0IC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3Jp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) 30 round;
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
