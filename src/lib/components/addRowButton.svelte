<script lang="ts">
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';

  import { addRow } from "$lib/pageEditorStore";

  export let rowIndex: number;
</script>

<div class="relative flex justify-center items-center z-10">
  <div class="absolute w-full flex justify-center items-center opacity-0 hover:opacity-100">
    <button on:click={()=>addRow(rowIndex)} 
      class="flex justify-center p w-8 bg-cyan-500 rounded">
       <Fa class="text-lg text-white" icon={faPlus}/>
     </button>
  </div>
</div>
