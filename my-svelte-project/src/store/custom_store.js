import { writable, derived } from 'svelte/store';

function createCount() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    };
}
const count = createCount();
const name = writable('world');
const greeting = derived(
    name,
    $name => `Hello ${$name}!`
);

export {
    count,
    name,
    greeting,
};