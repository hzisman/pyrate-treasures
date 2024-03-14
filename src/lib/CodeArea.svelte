<script>
    import { getSelectedCells } from "../utils/matrix";
    
    export let index;
    export let title;
    export let explanation;

    export let starterCodeBefore = '';
    export let codePrefix = '';
    export let starterCodeAfter = '';

    export let setActualSelected;

    let code = '';
    let wrong = false;
    let clicked = false;

    async function submitCode(e) {
        if (e.key && e.key !== 'Enter') return;

        e.preventDefault();
        console.log(code)
        wrong = clicked = true;

        setTimeout(() => wrong = false, 1000);
        setTimeout(() => clicked = false, 200);

        const actualSelected = await getSelectedCells(4, 5, code);
        const arrayToString = a => a.sort().join(', ');

        if (arrayToString(actualSelected) == arrayToString(selected)) {
        }

        setActualSelected(actualSelected);
        setTimeout(() => setActualSelected([]), 1500);
        console.log(actualSelected);
    }
</script>


<div class="mx-16 mt-20 text-black-green">
    <h1 class="font-[GillSans] text-5xl">
        <span class="font-light mr-10">{index}.</span>
        <span class="font-semibold">{title}</span>
    </h1>
    <h2 class="mt-12">{explanation}</h2>

    <form on:submit={submitCode} class:animate-shake={wrong}  class="mt-14" >
        <div class="w-full flex bg-gray-200 font-mono relative">
            <div class="bg-gray-400 text-gray-200 py-5 px-2 flex flex-col text-right">
                {#each {length: 8} as _, i}
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
                        />]
                </div>
                <pre>{starterCodeAfter}</pre>
            </div>
            <button type="submit" disabled={code === ''} class:!border-b-2={clicked}  class="border-gray-500 border-x-2 border-t-2 border-b-[6px] rounded-sm px-5 text-gray-600 absolute bottom-3 right-5 disabled:opacity-30">Enter</button>
        </div>
    </form>
</div>
