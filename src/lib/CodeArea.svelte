<script>
    import { getSelectedCells, containSameValues } from "../utils/matrix";
    import { correctSelection, currentlySelectedCells, newWrongSelection, progress } from './store'
    import { navigate } from "svelte-routing";
    import { levelCount } from '../levels';
    import { DELAY_BETWEEN_CORRECT_ANSWER_TO_NAVIGATION } from '../config'
    import { confetti } from "@tsparticles/confetti";

    export let level;
    export let title;
    export let explanation;

    export let selected;

    export let rows;
    export let cols;

    export let starterCodeBefore = '';
    export let codePrefix = '';
    export let starterCodeAfter = '';

    let code = $progress[level] ?? '';
    let currentLevel = level;

    $: {
        if (currentLevel !== level) {
            code = $progress[level] ?? '';
            currentLevel = level;
        }
    }

    let clicked = false;
    
    function navigateToRelative(diff) {
        // @ts-ignore
        document.startViewTransition(
            () => navigate(String(level + diff))
        )
    }
    
    async function submitCode(e) {
        if (e.key && e.key !== 'Enter') return;
        e.preventDefault();
        if (code.length === 0) return;
        if ($newWrongSelection) return;

        console.log(code)
        clicked = true;
        
        const actualSelected = await getSelectedCells(rows, cols, code);
        if (containSameValues(actualSelected, selected)) {
            correctSelection.set(true);
            progress.set({ ...progress, [level]: code });
            setTimeout(() => navigateToRelative(+1), DELAY_BETWEEN_CORRECT_ANSWER_TO_NAVIGATION);
            setTimeout(() => correctSelection.set(false), DELAY_BETWEEN_CORRECT_ANSWER_TO_NAVIGATION+100);
        } else {
            newWrongSelection.set(true);
        }
        
        setTimeout(() => newWrongSelection.set(false), 2000);
        setTimeout(() => clicked = false, 200);

        currentlySelectedCells.set(actualSelected);
        console.log(actualSelected);
    }
</script>


<div class="text-black-green mt-6 mx-8 md:mx-16 md:mt-10 ">
    
    <div class="justify-center font-mono flex md:justify-end mb-6">
        <button on:click={() => navigateToRelative(-1)} disabled={level === 1} class="bg-gray-200 px-3 opacity-70 hover:opacity-100   disabled:opacity-20"><span class="arrow arrow-left border-r-gray-400" /></button>
        <button class="bg-gray-200 px-4 mx-1 opacity-70 hover:opacity-100">
            Level {level} of {levelCount}
        </button>
        <button on:click={() => navigateToRelative(+1)} disabled={level === levelCount} class="bg-gray-200 px-3 opacity-70 hover:opacity-100 disabled:opacity-20"><span class="arrow arrow-right border-l-gray-400 disabled:opacity-20" /></button>
    </div>

    <h1 class="font-semibold font-[GillSans] text-3xl text-center md:text-left md:text-5xl">{title}</h1>
    <h2 class="mt-6 md:mt-12">{explanation}</h2>
    <form on:submit={submitCode} class:animate-shake={$newWrongSelection} class="mt-6 md:mt-14" >
        <div class="w-full flex bg-gray-200 font-mono relative">
            <div class="bg-gray-400 text-gray-200 py-5 px-2 flex flex-col text-right">
                {#each {length: 7} as _, i}
                    <div>{i+1}</div>
                {/each}
            </div>
            <div class="w-full py-5">
                <pre>{starterCodeBefore}</pre>
                <div class="flex h-[24px] mx-6">
                    <span class="leading-[24px]">{codePrefix}</span>
                    <!-- svelte-ignore a11y-autofocus -->
                    [
                        <textarea 
                            on:keypress={submitCode}
                            bind:value={code} 
                            autofocus 
                            autocapitalize="off" 
                            autocomplete="off" 
                            autocorrect="off" 
                            spellcheck="false" 
                            class="resize-none outline-none" 
                            style="width: max(10px, min({code.length * 10}px, 100%))"  
                        />
                    ]
                </div>
                <pre>{starterCodeAfter}</pre>
            </div>
            <button type="submit" disabled={code === ''} class:!border-b-2={clicked}  class="button right-5 ">Enter</button>
        </div>
    </form>

        

</div>

<style lang="postcss">
    .button {
        @apply 
        border-gray-500 border-x-2 border-t-2 border-b-[4px] 
        rounded-sm px-5 
        text-gray-600 
        disabled:opacity-30
        absolute bottom-3;
    }

    .arrow {
        @apply inline-block h-0 w-0 border-y-transparent border-y-[6px] align-middle;
    }
    
    .arrow-left {        
        border-right-width: 13px;
        border-right-style: solid;
    }

    .arrow-right {
        border-left-width: 13px;
        border-left-style: solid;
    }
</style>