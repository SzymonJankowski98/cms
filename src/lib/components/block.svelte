<script lang="ts">
// @ts-nocheck
  import { EMPTY, TEXT, NAV } from "$lib/pageEditor";
  import Navbar from "./navbar.svelte";

  export let attributes: Object;
</script>

{#if attributes.type == EMPTY}
  <div class="grow" style="background-color: {attributes.backgroundColor}"></div>
{:else if attributes.type == TEXT}
  <div class="grow ql-editor" style="background-color: {attributes.backgroundColor}">
    {@html attributes.content}
  </div>
{:else if attributes.type == NAV }
  <Navbar title={attributes.title}
          titleUrl={attributes.titleUrl}
          fontColor={attributes.fontColor}
          backgroundColor={attributes.backgroundColor}
          links={attributes.links}/>
{/if}