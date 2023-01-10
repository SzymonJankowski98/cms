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
  import ColumnResize from '$lib/components/columnResize.svelte';
  import EditColumnModal from '$lib/components/editColumnModal.svelte';
  import { showModal } from '$lib/editColumnModalStore';
  import Block from '$lib/components/block.svelte';
  
  /** @type {import('./$types').PageData} */
  
  export let data : any;    


  let flipDurationMs = 300;
  let rowDragDisabled = true;
  let columnDragDisabled = true;

  function startRowDrag(e: any) {
    e.preventDefault();
		rowDragDisabled = false;
	}

  function startColumnDrag(e: any) {
    e.preventDefault();
		columnDragDisabled = false;
	}

  function stopDrag() {
    flipDurationMs = 300;
    rowDragDisabled = true;
    columnDragDisabled = true;
  }
</script>

<head>
  <title>Edit Page</title>
  <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet" />
</head>

<style>
  .save-button{
    background-color: red;
  }
</style>

<svelte:window on:mouseup={stopDrag}/>

<main class="flex flex-col"
 use:dndzone={{items:$PageEditorStore, dragDisabled:rowDragDisabled, flipDurationMs, type:'rows'}}
 on:consider={(e) => setPage(e.detail.items)} on:finalize={(e) => setPage(e.detail.items)}>
  {#each $PageEditorStore as row, rowIndex (row.id)}
    <div animate:flip="{{duration: flipDurationMs}}">
      <Toolbar type="vertical">
        <div slot="content" class="flex flex-row justify-between"
         use:dndzone={{items:row.content, dragDisabled:columnDragDisabled, flipDurationMs}}
         on:consider={(e) => setRow(row.id, e.detail.items)} on:finalize={(e) => setRow(row.id, e.detail.items)}>
          {#each row.content as block, columnIndex (block.id)}
            <!-- <div class="flex grow" animate:flip="{{duration: flipDurationMs}}" style="width: {width}%;"></div> -->
            <div class="flex grow min-h-[50px]" style="width: {block.width}%;">
              <Toolbar>
                <div on:mousedown={startColumnDrag} slot="content" class="h-full flex grow">
                  <Block attributes={block}/>
                </div>
                <svelte:fragment slot="buttons">
                  <ToolbarButton action={()=>showModal(rowIndex, columnIndex, $PageEditorStore[rowIndex].content[columnIndex].type)} icon={faPenToSquare}/>
                  <ToolbarButton action={()=>deleteColumn(rowIndex, columnIndex)} icon={faTrash}/>
                </svelte:fragment>
              </Toolbar>
              {#if row.content.length - 1 > columnIndex}
                <ColumnResize rowIndex={rowIndex} columnIndex={columnIndex}/>
              {/if}
            </div>
          {/each}
        </div>
        <svelte:fragment slot="buttons">
          <ToolbarButton action={()=>addColumn(rowIndex)} icon={faSquarePlus}/>
          <ToolbarButton mousedownAction={startRowDrag} icon={faGripVertical}/>
          <ToolbarButton action={()=>deleteRow(rowIndex)} icon={faTrash}/>
        </svelte:fragment>
      </Toolbar>
      <AddRowButton rowIndex={rowIndex + 1}/>
    </div>
  {/each}
  <EditColumnModal/>
  <button class="save-button" on:click={()=>savePage("placeholderName")}>SAVE</button>
</main>
