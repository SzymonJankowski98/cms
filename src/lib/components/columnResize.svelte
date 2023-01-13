<script lang="ts">
  import Fa from 'svelte-fa';
  import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
  import { PageEditorStore, dragResizeColumn } from '$lib/pageEditorStore';

  export let rowIndex: number;
  export let columnIndex: number;

  let resizing = false;
	let start: any;
  let startWidth: any;
	
	function startResize(e: any) {
		resizing = true;
		start = e.pageX;
    startWidth = $PageEditorStore[rowIndex].content[columnIndex].width;
	};
	
	function stopResize() {
		resizing = false;
		start = null;
	}
	
	function resize(e: any) {
		if (!resizing) return;

    const newWidth = Math.round(startWidth + (((e.pageX - start) / window.innerWidth) * 100));
    dragResizeColumn(rowIndex, columnIndex, newWidth);
	}
</script>

<svelte:window on:mouseup={stopResize} on:mousemove={resize} />

<div class="flex justify-center items-center z-10">
  <button on:mousedown={startResize} 
   class="absolute flex cursor-grab opacity-0 hover:opacity-100 active:opacity-100 active:cursor-grabbing justify-center items-center w-6 h-full">
    <Fa class="text-xl text-cyan-500" icon={faEllipsisVertical}/>
  </button>
</div>
