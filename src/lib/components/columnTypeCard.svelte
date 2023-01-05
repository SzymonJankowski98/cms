<script lang="ts">
  import Fa from 'svelte-fa';
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

  import { EditColumnModalStore, pickCurrentType, showEditDetails } from '$lib/editColumnModalStore';

  export let type: string;
  export let icon: any;
</script>

<div on:mouseup={() => pickCurrentType(type)} class:outline={$EditColumnModalStore.currentType === type}
 class="aspect-square rounded-md flex flex-col overflow-hidden cursor-pointer
 transition-transform transform hover:scale-105 hover:shadow-xl outline-blue-400 outline-3">
  <div class="grow bg-gray-200 flex justify-center items-center">
    <Fa class="text-8xl text-white" icon={icon}/>
    {#if $EditColumnModalStore.currentType === type}
      <button on:click={showEditDetails}>
        <Fa class="absolute right-2 top-2 text-2xl" icon={faPenToSquare}/>
      </button>
    {/if}
  </div>
  <div class="bg-black text-center text-white text-lg" >{type}</div>
</div>
