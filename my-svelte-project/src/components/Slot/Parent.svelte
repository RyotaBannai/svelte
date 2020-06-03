<script>
    import Child from './Child.svelte';
    import ContactCard from './ContactCard.svelte'
</script>

<Child let:active>
    {#if active}
       Your hovering
    {:else}
        No!!
    {/if}
</Child>
<Child let:active>
    This is the slot
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