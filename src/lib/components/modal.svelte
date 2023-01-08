<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa';
  import { faClose } from '@fortawesome/free-solid-svg-icons';

  export let title: string;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
</script>

<div class="fixed w-full h-screen bg-black/70 top-0 z-20">
  <div class="custom-modal fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-md py-2 px-4 overflow-y-auto max-h-[40rem]">
    <header class="flex justify-between items-start">
      <h2 class="text-2xl font-bold">{title}</h2>
      <button on:click={close}>
        <Fa class="text-2xl m-1" icon={faClose}/>
      </button>
    </header>
    <div class="my-3">
      <slot/>
    </div>
  </div>
</div>

<style>
  .custom-modal {
    width: clamp(300px, 75%, 800px);
  }
</style>
