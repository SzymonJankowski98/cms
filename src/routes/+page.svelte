<script lang="ts">
  import { 
    faSquarePlus,
    faPenToSquare,
    faTrash,
    faGripVertical,
    faSave
  } from '@fortawesome/free-solid-svg-icons'
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  import Toolbar from "$lib/components/Toolbar.svelte";
  import ToolbarButton from '$lib/components/ToolbarButton.svelte';
  import { 
    PageEditorStore, 
    deleteRow, 
    addColumn, 
    deleteColumn, 
    setPage,
    setRow,
    savePage
  } from "$lib/pageEditorStore";
  import AddRowButton from '$lib/components/addRowButton.svelte';

  const flipDurationMs = 300;
</script>

<head>
  <title>Edit Page</title>
</head>

<main class="flex flex-col" use:dndzone={{items:$PageEditorStore, flipDurationMs, type:'rows'}}
 on:consider={(e) => setPage(e.detail.items)} on:finalize={(e) => setPage(e.detail.items)}>
  {#each $PageEditorStore as row, rowIndex (row.id)}
    <div animate:flip="{{duration: flipDurationMs}}">
      <Toolbar type="vertical">
        <div slot="content" class="flex flex-row justify-between" use:dndzone={{items:row.content, flipDurationMs}}
         on:consider={(e) => setRow(row.id, e.detail.items)} on:finalize={(e) => setRow(row.id, e.detail.items)}>
          {#each row.content as { id, content }, columnIndex (id)}
            <div animate:flip="{{duration: flipDurationMs}}">
              <Toolbar>
                <div slot="content" class="px-8 py-2 grow border border-black">
                  {content}
                </div>
                <svelte:fragment slot="buttons">
                  <ToolbarButton action={()=>{}} icon={faPenToSquare}/>
                  <ToolbarButton action={()=>deleteColumn(rowIndex, columnIndex)} icon={faTrash}/>
                </svelte:fragment>
              </Toolbar>
            </div>
          {/each}
        </div>
        <svelte:fragment slot="buttons">
          <ToolbarButton action={()=>addColumn(rowIndex)} icon={faSquarePlus}/>
          <ToolbarButton action={()=>{}} icon={faGripVertical}/>
          <ToolbarButton action={()=>deleteRow(rowIndex)} icon={faTrash}/>
          <ToolbarButton action={()=>savePage()} icon={faSave}/>
        </svelte:fragment>
      </Toolbar>
      <AddRowButton rowIndex={rowIndex + 1}/>
    </div>
  {/each}
</main>
