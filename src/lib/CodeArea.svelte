<script>
    export let index;
    export let title;
    export let explanation;

    export let starterCodeBefore = '';
    export let codePrefix = '';
    export let starterCodeAfter = '';

    let code = '';
    let wrong = false;

    function submitCode(e) {
        if (e.key && e.key !== 'Enter') return;

        e.preventDefault();
        console.log(code)
        wrong = true;

        // getSelectedCells(5, 4, code);

        setTimeout(() => wrong = false, 1000);
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
                    <textarea bind:value={code} autofocus autocapitalize="none" class="w-full resize-none outline-none"  on:keypress={submitCode}/>
                </div>
                <pre>{starterCodeAfter}</pre>
            </div>
            <button type="submit"  class="border-gray-500 border-x-2 border-t-2 border-b-[6px] rounded-sm px-5 text-gray-600 absolute bottom-3 right-5 focus:border-b-2">Enter</button>
        </div>
    </form>
</div>
