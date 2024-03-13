<script>
	import { getArray, padMatrix } from '../utils/matrix';
	import { rand, randInt } from '../utils/rand';

	export let rows;
	export let cols;

	export let selected;

	// 0 means water
	// 1 means ground
	const map = getArray(rows).map((_, i) =>
		getArray(cols).map((_, j) => isSelected(i, j) || Math.random() > 0.5)
	);

    const displayMap = createDisplayMap(map);

	/**
	 * Create a display map from a given map
	 * @param {number[][]} map
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
	 * @param {number} i
	 * @param {number} j
	 */
	function isSelected(i, j) {
		return selected.some(pair => pair[0] == i && pair[1] == j);
	}
</script>

<div style="--cell-size: {80}px" class="flex justify-center items-center h-full">
	<div class="relative border-[40px] border-water-600 rounded-xl">
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
					<div class="cell">
						{#if isSelected(i, j)}
							<div class="flex justify-center items-center h-full">
								<img src="images/scribles/scrible{randInt(6)}.png" alt="scrible" style="rotate: {rand(360)}deg" class="scrible" />
								<img src="images/tree.png" alt="tree" class="tree" />
							</div>	
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

	.island {
		grid-template-rows: calc(var(--cell-size) / 2) repeat(4, var(--cell-size)) calc(var(--cell-size) / 2);
        grid-template-columns: calc(var(--cell-size) / 2) repeat(5, var(--cell-size)) calc(var(--cell-size) / 2);
		/* grid-template-rows: repeat(10, minmax(0, 1fr));
		grid-template-columns: repeat(12, minmax(0, 1fr)); */
	}

	.cell {
		/* height: var(--cell-size);
		width: var(--cell-size); */
		/* line-height: var(--cell-size); */
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
		@apply grid grid-rows-5 grid-cols-6 absolute top-0 left-0;
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

    @keyframes blow-out {
        0% { transform: rotate(0deg) scale(1); }
        20% { transform: rotate(10deg) scale(1.5); }
        100% { transform: rotate(400deg) scale(0); }
    }
</style>
