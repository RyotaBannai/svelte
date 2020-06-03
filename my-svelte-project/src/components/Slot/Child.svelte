<script>
    let active;
    function enter () {
        active = true
    }
    function leave () {
        active = false
    }
</script>
<style>
    div {
        padding: 10px;
        background-color: rebeccapurple;
        opacity: .8;
        border: 1px solid white;
        color:white;
        cursor: pointer;
    }
</style>

<div class="child"
     on:mouseenter={enter}
     on:mouseleave={leave}
>
    <slot active={active}>
        <em>no content was provided</em>
    </slot>
</div>