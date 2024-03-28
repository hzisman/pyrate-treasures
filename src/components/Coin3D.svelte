<script>
    let className = '';
    export { className as class }
    export let style = '';
    export let duration = 1;
</script>

<div class={className} style={style}>
    <div class="coin-wrap" style="--duration: {duration}s">
        <div class="coin">
            <div class="coin__front-backface"></div>
            <div class="coin__back-backface"></div>
            <div class="coin__front">
                <svg viewBox="0 0 256 273.612">
                    <path d="M191.548 186.292l.06 60.52-53.705 26.8v-60.494zM256 153.947v60.731l-45.805 22.86-.033-60.454zm-64.533-48.66l.06 59.885-53.625 26.647v-59.905zm64.533-32.082v59.509l-45.851 23.309-.04-60.005zm-126.262-7.04l47.933 24.195-49.731 24.975-47.028-23.62zM63.065 32.511l45.718 23.077-48.938 25.543-46.954-23.58zm130.69.35l49.243 24.69-44.04 22.12-48.032-24.228zM128.233 0l44.33 22.225-42.506 22.694L84.377 21.88z" />
                    <path d="M118.944 131.914L82.77 113.728v78.606S38.533 98.207 34.434 89.752c-.528-1.091-2.703-2.288-3.259-2.578C23.243 83.009 0 71.235 0 71.235V210.11l32.154 17.188v-72.59s43.768 84.105 44.211 85.024c.443.92 4.84 9.784 9.533 12.897 6.253 4.139 33.053 20.255 33.053 20.255z" />
                </svg>
            </div>
            <div class="coin__back">
                <svg viewBox="0 0 32 32">
                    <path d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" />
                    <path d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" />
                </svg>
            </div>
        </div>
    </div>
</div>

<style>

.coin-wrap {
    --dark: #ac792c;
    --medium: #c89531;
    --light: #e3cb74;

    transform: perspective(400px);
    transform-style: preserve-3d;
    display: inline-block;
    vertical-align: middle;
}

.coin {
    transform-style: preserve-3d;
    animation: coin var(--duration) infinite linear;
    height: 100px;
    width: 100px;

}
.coin:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 38px;
    top: 0;
    width: 12px;
    transform: rotateY(-90deg);
    transform-origin: 100% 50%;
    background-color: var(--dark);
}


.coin__front, .coin__back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--medium);
    width: 100%;
    height: 100%;
    font-size: 56px;
    border-radius: 50%;
}


.coin__front svg, .coin__back svg {
    transform: scale(.5);
    fill: var(--light);
    filter: drop-shadow(1px 2px var(--dark)) drop-shadow(-1px 0 #fff);
}

.coin__front:before, .coin__back:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    transform: scale(0.8);
    box-shadow: -2px -4px var(--dark), 2px 4px var(--light);
}

.coin__back {
    position: absolute;
    top: 0;
    transform: translateZ(-12px) rotateY(-180deg);
}

.coin__front-backface, .coin__back-backface {
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--dark);
}

.coin__front-backface {
    transform: translateZ(-1px);
}

.coin__back-backface {
    transform: translateZ(-11px);
}

@keyframes coin {
    to {
        transform: rotateY(calc(-359deg));
    }
}

</style>