<script>
  import { 
    faSquarePlus,
    faPenToSquare,
    faTrash,
    faGripVertical
  } from '@fortawesome/free-solid-svg-icons'

  import Toolbar from "$lib/components/Toolbar.svelte";
  import ToolbarButton from '$lib/components/ToolbarButton.svelte';
  import PageEditorStore from "$lib/pageEditorStore";
  import AddRowButton from '$lib/components/addRowButton.svelte';
</script>

<head>
  <title>Edit Page</title>
</head>

<main class="flex flex-col">
  {#each $PageEditorStore as row}
    <Toolbar type="vertical">
      <div slot="content" class="flex flex-row justify-between">
        {#each row as { content }}
          <Toolbar>
            <div slot="content" class="px-8 py-2 grow border border-black">
              {content}
            </div>
            <svelte:fragment slot="buttons">
              <ToolbarButton icon={faPenToSquare}/>
              <ToolbarButton icon={faTrash}/>
            </svelte:fragment>
          </Toolbar>
        {/each}
      </div>
      <svelte:fragment slot="buttons">
        <ToolbarButton icon={faSquarePlus}/>
        <ToolbarButton icon={faGripVertical}/>
        <ToolbarButton icon={faTrash}/>
      </svelte:fragment>
    </Toolbar>
  {/each}
  <div class="flex justify-center">
    <AddRowButton/>
  </div>
</main>
