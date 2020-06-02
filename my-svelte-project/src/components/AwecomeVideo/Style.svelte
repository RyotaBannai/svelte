<style>
    div {
        position: relative;
    }

    .controls {
        position: absolute;
        top: 0;
        width: 100%;
        transition: opacity 1s;
    }

    .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    span {
        padding: 0.2em 0.5em;
        color: white;
        text-shadow: 0 0 8px black;
        font-size: 1.4em;
        opacity: 0.7;
    }

    .time {
        width: 3em;
    }

    .time:last-child { text-align: right }

    progress {
        display: block;
        width: 100%;
        height: 10px;
        -webkit-appearance: none;
        appearance: none;
    }

    progress::-webkit-progress-bar {
        background-color: rgba(0,0,0,0.2);
    }

    progress::-webkit-progress-value {
        background-color: rgba(255,255,255,0.6);
    }

    video {
        width: 100%;
    }
</style>