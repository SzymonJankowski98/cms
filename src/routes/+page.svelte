<script>
  import { 
    faSquarePlus,
    faPenToSquare,
    faTrash,
    faGripVertical
  } from '@fortawesome/free-solid-svg-icons'

  import Toolbar from "$lib/components/Toolbar.svelte";
  import ToolbarButton from '$lib/components/ToolbarButton.svelte';
  import { 
    PageEditorStore, 
    deleteRow, 
    addColumn, 
    deleteColumn 
  } from "$lib/pageEditorStore";
  import AddRowButton from '$lib/components/addRowButton.svelte';

</script>

<head>
  <title>Edit Page</title>
</head>

<main class="flex flex-col">
  {#each $PageEditorStore as row, rowIndex}
    <Toolbar type="vertical">
      <div slot="content" class="flex flex-row justify-between">
        {#each row as { content }, columnIndex}
          <Toolbar>
            <div slot="content" class="px-8 py-2 grow border border-black">
              {content}
            </div>
            <svelte:fragment slot="buttons">
              <ToolbarButton action={()=>{}} icon={faPenToSquare}/>
              <ToolbarButton action={()=>deleteColumn(rowIndex, columnIndex)} icon={faTrash}/>
            </svelte:fragment>
          </Toolbar>
        {/each}
      </div>
      <svelte:fragment slot="buttons">
        <ToolbarButton action={()=>addColumn(rowIndex)} icon={faSquarePlus}/>
        <ToolbarButton action={()=>{}} icon={faGripVertical}/>
        <ToolbarButton action={()=>deleteRow(rowIndex)} icon={faTrash}/>
      </svelte:fragment>
    </Toolbar>
    <AddRowButton rowIndex={rowIndex + 1}/>
  {/each}
</main>
