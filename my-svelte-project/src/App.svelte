<script>
	export let name;
	import Login from './components/Login.svelte';
	import CatClipList from './components/CatClipList.svelte';
	import Color from './components/Color.svelte';
	import AVIndex from './components/AwecomeVideo/AVIndex.svelte'
	import EnterPin from './components/EnterPin/EPIndex.svelte'
	import TestCustomStore from './components/TestCustomStore.svelte'
</script>

<main>
	<h1>Hello {name}!</h1>
	<AVIndex></AVIndex>
	<TestCustomStore></TestCustomStore>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>