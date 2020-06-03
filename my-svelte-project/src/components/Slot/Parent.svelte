<script>
    import Child from './Child.svelte';
    import ContactCard from './ContactCard.svelte'

    let users = [
        {firstname: 'Ada'},
        {lastname: 'Lovelace'},];
</script>

<Child let:active>
    {#if active}
       Your hovering
    {:else}
        No!!
    {/if}
</Child>

<ContactCard>
	<span slot="name">
		P. Sherman
	</span>

    <span slot="address" >
		42 Wallaby Way<br>
		Sydney
	</span>
    <span slot="email" let:someVal>
        {someVal}
	</span>
</ContactCard>

{#each users as user}
    {@debug user}
    <li>user object</li>
{/each}
