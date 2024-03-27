<script>
    import { Link } from "svelte-routing";
import Coin3D from "./Coin3D.svelte";
    import OceanBackground from "./OceanBackground.svelte";

</script>

<div class="h-[100vh]">
    <div class="absolute z-10 h-full w-full flex justify-center items-center">
        <div>
            <img src="images/island.png" alt="island" class="h-[min(60vh,80vw)] white-glow mx-auto" />
            <Link to="/1" class="flex justify-center">
                <h1 class="text-center my-6 text-[50px] text-water-100 font-[GillSans] white-glow start">
                    Py-rate Treasures
                </h1>
                <span class="arrows absolute">
                    <span class="arrow arrow-right border-l-water-100" />
                    <span class="arrow arrow-right border-l-water-500" />
                    <span class="arrow arrow-right border-l-water-600" />
                </span>
                
            </Link>
            <Coin3D duration={3} class="drop-shadow-lg flex justify-center"/>
        </div>
    </div>
    <OceanBackground class="h-full" />
</div>

<style>
    .white-glow {
        filter: drop-shadow(0px 0px 20px #ffffff30) drop-shadow(0px 0px 5px #ffffff30);
    }

    .arrows {
        opacity: 0;
        transition: all 1s;
        transform: translateX(-20px);
    }

    h1:hover+.arrows {
        opacity: 1;
        transform: none;
    }

</style>