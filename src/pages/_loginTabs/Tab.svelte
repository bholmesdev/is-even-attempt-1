<script>
  import { toTabPanelId, toTabId, tabIdx } from './tab.store'

  export let idx = 0;
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