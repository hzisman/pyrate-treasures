<script>
	import { getArray, padMatrix } from '../utils/matrix';
	import { rand, randInt } from '../utils/rand';
	import { currentlySelectedCells, newWrongSelection, correctSelection } from './store';

	export let rows;
	export let cols;

	export let selected;

	// 0 means water
	// 1 means ground
	$: map = getArray(rows).map((_, i) =>
		getArray(cols).map((_, j) => isSelected(selected, i, j) || Math.random() > 0.5)
	);

    $: displayMap = createDisplayMap(map);

	/**
	 * Create a display map from a given map
	 * @param {(number|boolean)[][]} map
	 */
	function createDisplayMap(map) {
		/**
		 * Returns the details of a specific cell in the display map
		 * given its neighbors
		 * @param {number} n00
		 * @param {number} n01
		 * @param {number} n10
		 * @param {number} n11
		 * 
		 * @returns {[number, number]}
		 */
		function getTypeFromNeighborhood(n00, n01, n10, n11) {
  			const sum = n00 + n01 + n10 + n11;

			const sumMapping = {
				0: [0, 0],
				1: [2, n01 * 1 + n10 * 3 + n11 * 2],
				2: (n00 === n01 || n00 === n10) ? (n00 && n01 ? [3, 3] : [3, n00 + n10]) : [5, n00],
				3: [4, Number(!n01) * 1 + Number(!n10) * 3 + Number(!n11) * 2],
				4: [1, 0]
			};

			return sumMapping[sum] || null; // Handle invalid sum cases
		}

		let paddedMap = padMatrix(map);
		let displayMap = [];
		for (let i = 0; i < rows + 1; i++) {
			displayMap.push([]);
			for (let j = 0; j < cols + 1; j++) {
				const [tile, rotation] = getTypeFromNeighborhood(
					paddedMap[i][j],
					paddedMap[i][j + 1],
					paddedMap[i + 1][j],
					paddedMap[i + 1][j + 1]
				);
				displayMap.at(-1).push([tile, Number(rotation)]);
			}
		}
		return displayMap;
	}

	/**
	 * Checks if the given location in the map contains a treasure
	 * @param {number[]} list
	 * @param {number} i
	 * @param {number} j
	 */
	function isSelected(list, i, j) {
		return list.includes(i * cols + j);
	}
</script>
	
<div style="--cell-size: {Math.round(400/cols)}px; --rows: {rows}; --cols: {cols};" class="flex justify-center items-center h-full">
	<div class="map relative border-[40px] border-water-600 rounded-xl">
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
						{#if isSelected(selected, i, j)}
							<div class="flex justify-center items-center h-full">
								<img src="images/scribles/scrible{randInt(6)}.png" class:!animate-fade-out={$correctSelection} alt="scrible" style="rotate: {rand(360)}deg" class="scrible" />
								<img src="images/tree.png" alt="tree" class:!animate-blow-out={$correctSelection}  class="tree" />
							</div>	
						{/if}
						{#if $newWrongSelection && isSelected($currentlySelectedCells, i, j)}
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
		--deg: 10deg;
	}

	.map {
		view-transition-duration: 2000;
		view-transition-name: move;
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
		@apply absolute;
		height: calc(var(--cell-size) / 1.8);
		animation: swing ease-in-out 1s infinite alternate;
	}
    
	@keyframes swing {
        0% { transform: rotate(var(--deg)); }
        100% { transform: calc(-1 * rotate(var(--deg))); }
    }

</style>
