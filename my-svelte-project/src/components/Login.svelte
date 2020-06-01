<script>
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }
</script>

<button on:click={toggle}>
    {#if user.loggedIn}
        <span>Log out</span>
    {:else }
        <span>Log In</span>
    {/if}
</button>

<style>
    span {
        cursor: pointer;
    }
</style>