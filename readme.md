### Start Project
- download scaffold by this `npx degit sveltejs/template my-svelte-project` `degit` is a project scaffolding tool
```
npm install
npm run dev
```
- make own scaffold by fork `https://github.com/sveltejs/template` and hit the command `npx degit your-name/template my-new-project`
- `npm run build` to create a production-ready version of your app, and check the project template's [README](https://github.com/sveltejs/template/blob/master/README.md) for instructions on how to easily deploy your app to the web with [Now](https://zeit.co/now) or [Surge](http://surge.sh/).
- `#`: ` a block opening tag`
- `/`: `a block closing tag` 
- `:`: `a block continuation tag`, as in `{:else}` and `{:else if 5 > x}`
- add id when you use each like `{#each things as thing (thing.id)}`
- not need to add conditional `if` to check (say) whether length is more than 0 or not.
```svelte
{#each photos as photo}
    <figure>
        <img src={photo.thumbnailUrl} alt={photo.title}>
        <figcaption>{photo.title}</figcaption>
    </figure>
{:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
{/each}
```
- event modifiers: `on:click|once={handleClick}`
- Vue's `@click="$emit('event')"` -> `v-on:event='evenHandler'` = Svelte's `on:click={dispatch('event')}` -> `on:event={eventHandler}`
```svelte
// with payload...
function fireEvent(){
    let payload = { text: 'Hello!'}
    dispatch('event', payload);
}
on:click={fireEvent} 
```
- [`Event Forwarding`](https://svelte.dev/tutorial/event-forwarding): component events don't bubble. if you want it bubbles, then add component with the same eventListener
- Vueのv-modle は `<input bind:value={name}>` に相当
- Every block-level element has `clientWidth, clientHeight, offsetWidth and offsetHeight` bindings:
- Vue の参照の`ref`は svelte では `bind:this={someVariable}`
- `export` from child, and use this as `prop` on parent.
### Lifecycle hook - What you need to know.
- It's recommended to `put the fetch in onMount` rather than `at the top level of the <script>` because of server-side rendering (SSR). `With the exception of onDestroy, lifecycle functions don't run during SSR`, which means we can `avoid fetching data` that should be loaded lazily once the component has been mounted in the DOM.
- `Lifecycle functions must be called while the component is initialising` so that `the callback is bound to the component instance` — not (say) in a setTimeout.
- If the `onMount callback returns a function`, `that function will be called when the component is destroyed`.
- While it's important to call `lifecycle functions during the component's initialisation`, it `doesn't matter where you call them from`. Creat it as a helper function and call it in a component you're working on.
- The `tick` function is `unlike other lifecycle functions` in that `you can call it any time`, not just when the component first initialises. It returns `a promise` that `resolves as soon as any pending state changes have been applied to the DOM` (or immediately, if there are no pending state changes).
> When you update component state in Svelte, `it doesn't update the DOM immediately`. Instead, it `waits until the next microtask` to see if there are any other changes that need to be applied, including in other components. Doing so avoids unnecessary work and allows the browser to batch things more effectively.
### store
- you can reference a store value by prefixing the store name with `$` (Any name beginning with $ is assumed to refer to a store value)
- `derived store`: store which updated by other store's change. you can derive [multiple stores](https://svelte.dev/docs#derived)
- `store binding`: you can bind store (say) form. (<input `bind:value={$name}>`) The $name += '!' assignment is equivalent to name.set($name + '!')
### transition is super easy by using svelte
- only you need to do is adding `transition` and `easing type`
```svelte
<p transition:fade>
	Fades in and out
</p>
```
- transition is reversible by default!
- or you can set `in` and `out` `as different transition for each`.
- we also need to apply `motion` `to the elements that aren't transitioning`. For this, we use the `animate` directive. put `animate:flip` on the label.