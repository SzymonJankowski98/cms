<script>
  import { faSquarePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
  import ToolbarButton from './ToolbarButton.svelte';

  export let type = "horizontal";
</script>

<div class="group relative [&>.toolbar]:hover:flex grow">
  <slot></slot>
  <div class="hidden toolbar absolute {type} top-0 bg-slate-400">
    <ToolbarButton icon={faSquarePlus}/>
    <ToolbarButton icon={faPenToSquare}/>
  </div>
</div>

<style>
  .horizontal {
    @apply left-0;
  }

  .vertical {
    @apply right-0 flex-col;
  }
</style>
