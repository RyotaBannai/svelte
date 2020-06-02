<script>
    import Style from './Style.svelte'
    let src = "caminandes-llamigos.mp4"
    let poster = "caminandes-llamigos.jpg"

    // These values are bound to properties of the video
    let time = 0;
    let duration;
    let paused = true;

    let showControls = true;
    let showControlsTimeout;

    function handleMousemove(e) {
        // Make the controls visible, but fade out after
        // 2.5 seconds of inactivity
        clearTimeout(showControlsTimeout);
        showControlsTimeout = setTimeout(() => showControls = false, 2500);
        showControls = true;

        if (!(e.buttons & 1)) return; // mouse not down
        if (!duration) return; // video not loaded yet

        const { left, right } = this.getBoundingClientRect();
        // returns the size of an element and its position relative to the viewport.
        // the element's size is equal to its width/height + padding + border-width
        // in the case that the standard box model is being used, or width/height only if box-sizing: border-box has been set on it.

        time = duration * (e.clientX - left) / (right - left);
    }

    function handleMousedown(e) {
        // we can't rely on the built-in click event, because it fires
        // after a drag — we have to listen for clicks ourselves

        function handleMouseup() {
            if (paused) e.target.play();
            else e.target.pause();
            cancel();
        }

        function cancel() {
            e.target.removeEventListener('mouseup', handleMouseup);
        }

        e.target.addEventListener('mouseup', handleMouseup);

        setTimeout(cancel, 200);
    }

    function format(seconds) {
        if (isNaN(seconds)) return '...';

        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (seconds < 10) seconds = '0' + seconds;

        return `${minutes}:${seconds}`;
    }
</script>
<Style></Style>

<h1>Caminandes: Llamigos</h1>
<p>From <a href="https://cloud.blender.org/open-projects">Blender Open Projects</a>. CC-BY</p>

<div>
    <video
            {poster}
            {src}
            on:mousemove={handleMousemove}
            on:mousedown={handleMousedown}
            bind:currentTime={time}
            bind:duration
            bind:paused
    ></video>

    <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
        <progress value="{(time / duration) || 0}"/>

        <div class="info">
            <span class="time">{format(time)}</span>
            <span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
            <span class="time">{format(duration)}</span>
        </div>
    </div>
</div>