<script>
    import { count, name, greeting } from '../store/custom_store'

</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<h1>{$greeting}</h1>
<input bind:value={$name}>

<button on:click="{() => $name += '!'}">
    Add exclamation mark!
</button>