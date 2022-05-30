<script lang="ts">
  import { tabIdx, toTabId, toTabPanelId } from './tab.store'
  import { slide } from 'svelte/transition';

  export let idx = 0;

</script>

{#if idx === $tabIdx}
<div role="tabpanel" aria-labelledby={toTabId(idx)} id={toTabPanelId(idx)} transition:slide>
  <slot />
</div>
{/if}