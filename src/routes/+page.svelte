<script>
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';

  import Toolbar from "$lib/components/Toolbar.svelte";
  import PageEditorStore from "$lib/pageEditorStore";

  let page = PageEditorStore();
</script>

<head>
  <title>Edit Page</title>
</head>

<main class="flex flex-col">
  {#each $page as row}
    <Toolbar type="vertical">
      <div class="flex flex-row justify-between">
        {#each row as { content }}
          <Toolbar>
            <div class="px-8 py-2 flex-grow border border-black">
              {content}
            </div>
          </Toolbar>
        {/each}
      </div>
    </Toolbar>
  {/each}
  <div class="flex justify-center">
    <button class="flex justify-center m-2 p-2 w-96 bg-slate-400 rounded-md">
      <Fa class="text-lg text-white" icon={faPlus}/>
    </button>
  </div>
</main>
