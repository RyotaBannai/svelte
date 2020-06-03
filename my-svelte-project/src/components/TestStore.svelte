<script>
    import { onDestroy } from 'svelte';
    import { count } from '../store/stores';
    import Incrementer from '../store/count/Incrementer.svelte';
    import Decrementer from '../store/count/Decrementer.svelte';
    import Resetter from '../store/count/Resetter.svelte';

    const unsubscribe = count.subscribe(value => {
        $count = value;
    });
    onDestroy(unsubscribe); //prevent memory leak when it repeats instantiated and destroyed
</script>

<h1>The count is {$count}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>