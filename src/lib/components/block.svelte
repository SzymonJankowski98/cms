<script lang="ts">
// @ts-nocheck
  import { EMPTY, TEXT } from "$lib/pageEditor";

  export let attributes: Object;
</script>

{#if attributes.type == EMPTY}
  <div class="grow" style="background-color: {attributes.backgroundColor}"></div>
{:else if attributes.type == TEXT}
  <div class="grow ql-editor" style="background-color: {attributes.backgroundColor}">
    {@html attributes.content}
  </div>
{/if}