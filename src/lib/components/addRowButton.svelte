<script lang="ts">
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';

  import { addRow } from "$lib/pageEditorStore";

  export let rowIndex: number;
</script>

<div class="flex justify-center relative">
  <button on:click={()=>addRow(rowIndex)} 
   class="absolute flex justify-center p w-8 bg-slate-400 rounded transform -translate-y-1/2 z-10">
    <Fa class="text-lg text-white" icon={faPlus}/>
  </button>
</div>
