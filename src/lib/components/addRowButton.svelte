<script>
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';

  import { PageEditorStore } from "$lib/pageEditorStore";
  import { defaultRow } from '$lib/pageEditor';

  const addRow = () => PageEditorStore.update(page => [...page, defaultRow]);
</script>

<button on:click={addRow} class="flex justify-center m-2 p-2 w-96 bg-slate-400 rounded-md">
  <Fa class="text-lg text-white" icon={faPlus}/>
</button>