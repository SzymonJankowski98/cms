<script lang="ts">
  import { EditColumnModalStore, showTypePicker, hideModal } from '$lib/editColumnModalStore';
  import { EMPTY, NAV, TEXT } from '$lib/pageEditor';
  import { updateColumn } from "$lib/pageEditorStore";
  import { PageEditorStore } from "$lib/pageEditorStore";
  import QuillEditor from './quillEditor.svelte';

  function currentBlock() {
    return $PageEditorStore[$EditColumnModalStore.currentRow].content[$EditColumnModalStore.currentColumn];
  }

  function onSubmit(e: any) {
    const formData = new FormData(e.target);

    const data = { type: $EditColumnModalStore.currentType };
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    updateColumn($EditColumnModalStore.currentRow, $EditColumnModalStore.currentColumn, data);
    hideModal();
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  {#if $EditColumnModalStore.currentType === EMPTY}
    <div>
      <label for="backgroundColor">Background color</label>
      <input type="color" name="backgroundColor" value={currentBlock().backgroundColor}/>
    </div>
  {:else if $EditColumnModalStore.currentType === TEXT}
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="backgroundColor">Background color:</label>
      <input type="color" name="backgroundColor" value={currentBlock().backgroundColor}/>
    </div>
    <QuillEditor content={currentBlock().content}/>
  {:else if $EditColumnModalStore.currentType === NAV}
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="backgroundColor">Background color:</label>
      <input type="color" name="backgroundColor" value={currentBlock().backgroundColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="fontColor">Font color:</label>
      <input type="color" name="fontColor" value={currentBlock().fontColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="title">Title:</label>
      <input class="input input-bordered w-full input-sm max-w-xs" type="text" name="title" value={currentBlock().title}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="titleUrl">Title url:</label>
      <input class="input input-bordered w-full input-sm max-w-xs" type="text" name="titleUrl" value={currentBlock().titleUrl}/>
    </div>
  {/if}
  <div class="flex justify-between mt-4">
    <button class="btn btn-sm" on:click={showTypePicker}>back</button>
    <button class="btn btn-sm btn-primary" type="submit">Save</button>
  </div>
</form>