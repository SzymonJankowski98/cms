<script>
  import Fa from 'svelte-fa'
  import { faSquarePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

  export let type = "horizontal";
</script>

<div class="group relative">
  <slot></slot>
  <div class="hidden absolute {type} top-0 group-hover:flex bg-slate-400">
    <button class="p-1 flex justify-center items-center">
      <Fa class="text-lg text-white" icon={faSquarePlus}/>
    </button>
    <button class="p-1">
      <Fa class="text-lg text-white" icon={faPenToSquare}/>
    </button>
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
