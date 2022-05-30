<script>
  import { toTabPanelId, toTabId, tabIdx } from './tab.store'

  export let idx = -1;
</script>

<button
  class="tab"
  aria-controls={toTabPanelId(idx)}
  id={toTabId(idx)}
  aria-selected={idx === $tabIdx}
  tabindex={idx === $tabIdx ? 0 : -1}
  role="tab"
  type="button"
  on:click={() => tabIdx.set(idx)}>
  <slot />
</button>

<style>
  button, button:is(:focus, :hover, :active) {
    padding: var(--size-2) var(--size-4);
    background-position-x: 0%;
    color: var(--brand);
  }
  button[aria-selected="false"]:hover {
    background: var(--indigo-1);
  }
  button[aria-selected="true"] {
    background-position-x: 100%;
    color: white;
  }
</style>