<script>
    let className = '';
    export { className as class };
</script>

<div class="{className} absolute h-[100vh] w-[100vw] bg-white bg-opacity-85 flex justify-center items-center z-[1000]">
    <div class="compass scale-150">
        <div class="needle">
        </div>
    </div>
</div>

<style>
    .compass {
        border: 1px solid #888;
        display: block; 
        width: 25px; 
        height: 25px;
        border-radius: 100%;
    }

    .needle {
        width: 6px; 
        margin: 12px auto 0 auto;
        animation-name: waggle;
        animation-duration: 2500ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    .needle:after {
        content: '';
        display: block;
        border-color: orangered transparent;
        border-style: solid;
        border-width: 0px 3px 10px 3px;
        margin-top: -15px; 
    }

    .needle:before {
        content: '';
        display: block;
        border-color: #888 transparent;
        border-style: solid;
        border-width: 10px 3px 0px 3px;
        margin-bottom: -20px;
    }

    @keyframes waggle {
        0%   { transform:rotate(0deg) ;}
        10%  { transform:rotate(12deg) ;}
        40%  { transform:rotate(-25deg) ;}
        60%  { transform:rotate(20deg) ;}
        80%  { transform:rotate(-15deg) ;}
        100% { transform:rotate(0deg) ;}
    }
</style>