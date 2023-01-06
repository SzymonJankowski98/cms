<script lang="ts">
  import { EditColumnModalStore, showTypePicker, hideModal } from '$lib/editColumnModalStore';
  import { EMPTY, TEXT } from '$lib/pageEditor';
  import { updateColumn } from "$lib/pageEditorStore";
  import { PageEditorStore } from "$lib/pageEditorStore";

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
    <div>
      <label for="backgroundColor">Background color</label>
      <input type="color" name="backgroundColor" value={currentBlock().backgroundColor}/>
    </div>
    <div>
      <label for="content">Content</label>
      <input type="textarea" name="content" value={currentBlock().content}/>
    </div>
  {/if}
  <div class="flex justify-between mt-2">
    <button on:click={showTypePicker}>back</button>
    <button type="submit">Save</button>
  </div>
</form>