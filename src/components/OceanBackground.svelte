<script>
    import { onMount } from 'svelte';

	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';

    let className = '';
    export { className as class };

	let particlesConfig = {
        background: {
            image: "linear-gradient(#3C7073, #25787C)",
        },
        fullScreen: {
            enable: false,
            zIndex: -100,
        },
        particles: {
            number: {
                value: 3000,
                density: {
                    enable: true,
                    area: 100,
                }
            },
            move: {
                enable: true,
                speed: { min: 0.01, max: 0.2 },
            },
            opacity: {
                value: { min: 0.1, max: 0.3 },
            },
            size: {
                value: { min: 0.1, max: 2 },
            },
        },
    };

    onMount(() => {
        particlesInit(async (engine) => {
            await loadSlim(engine);
        });
    })
</script>

<Particles
    class={className}
    options="{particlesConfig}" 
/>