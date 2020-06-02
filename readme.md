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
- event modifiers: `on:click|once={handleClick}`
- Vue's `@click="$emit('event')"` -> `v-on:event='evenHandler'` = Svelte's `on:click={dispatch('event')}` -> `on:event={eventHandler}`
```js
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