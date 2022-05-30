<script lang="ts">
  import Tab from './Tab.svelte';
  import { tabIdx } from './tab.store';

  let tabListEl;

  function moveFocus(event) {
    const tabEls = tabListEl?.querySelectorAll('[role="tab"]');
    if (!(tabEls instanceof NodeList)) return;
    if (event.key === "ArrowLeft" && $tabIdx > 0) {
      $tabIdx -= 1;
    } else if (event.key === "ArrowRight" && $tabIdx < tabEls.length - 1) {
      $tabIdx += 1;
    }
    (tabEls[$tabIdx] as HTMLButtonElement).focus();
  }
</script>

<div role="tablist" class="tabs" on:keydown={moveFocus} bind:this={tabListEl}>
  <Tab idx={0}>Login</Tab>
  <Tab idx={1}>Register</Tab>
</div>

<style>
  [role="tablist"] {
    width: max-content;
    margin: auto;
    padding-block: var(--size-3);
  }
</style>
