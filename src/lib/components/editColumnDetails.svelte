<script lang="ts">
  import Fa from 'svelte-fa';
  import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

  import { EditColumnModalStore, showTypePicker, hideModal } from '$lib/editColumnModalStore';
  import { CARDS, EMPTY, NAV, TEXT } from '$lib/pageEditor';
  import { updateColumn } from "$lib/pageEditorStore";
  import { PageEditorStore } from "$lib/pageEditorStore";
  import QuillEditor from './quillEditor.svelte';

  function currentBlock() {
    return $PageEditorStore[$EditColumnModalStore.currentRow].content[$EditColumnModalStore.currentColumn];
  }

  function onSubmit(e: any) {
    const formData = new FormData(e.target);

    const data = { type: $EditColumnModalStore.currentType, content: content };
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    updateColumn($EditColumnModalStore.currentRow, $EditColumnModalStore.currentColumn, data);
    hideModal();
  }

  function addContent(e: any) {
    const formData = new FormData(e.target);

    const data = { };
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    content = content.concat([data])
  }

  function removeContent(index: number) {
    content.splice(index, 1);
    content = content;
  }

  function moveContentUp(index: number) {
    if (index === 0) return
  
    content.splice(index - 1, 0, content.splice(index, 1)[0]);
    content = content;
  }

  function moveContentDown(index: number) {
    if (index + 1 === content.length) return

    content.splice(index + 1, 0, content.splice(index, 1)[0]);
    content = content;
  }

  let content = currentBlock().content
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
  {:else if $EditColumnModalStore.currentType === CARDS}
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="backgroundColor">Background color:</label>
      <input type="color" name="backgroundColor" value={currentBlock().backgroundColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="fontColor">Font color:</label>
      <input type="color" name="fontColor" value={currentBlock().fontColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="secondaryFontColor">Secondary font color:</label>
      <input type="color" name="secondaryFontColor" value={currentBlock().secondaryFontColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="cardColor">Card color:</label>
      <input type="color" name="cardColor" value={currentBlock().cardColor}/>
    </div>
    <div class="flex gap-2 mb-2">
      <label class="font-medium" for="buttonColor">Button color:</label>
      <input type="color" name="buttonColor" value={currentBlock().buttonColor}/>
    </div>
    <div class="flex gap-2 flex-col mb-2">
      <span class="font-medium">Cards:</span>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Title url</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each content as card, index}
              <tr>
                <th>{index + 1}</th>
                <td>{card.title}</td>
                <td>{card.titleUrl}</td>
                <td>{card.description}</td>
                <td>
                  <button on:click|preventDefault={()=>moveContentUp(index)}>
                    <Fa class="text-lg cursor-pointer" icon={faArrowUp}/>
                  </button>
                  <button on:click|preventDefault={()=>moveContentDown(index)}>
                    <Fa class="text-lg cursor-pointer" icon={faArrowDown}/>
                  </button>
                  <button on:click|preventDefault={()=>removeContent(index)}>
                    <Fa class="text-lg cursor-pointer" icon={faTrash}/>
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <form on:submit|preventDefault={addContent}>
        <div class="flex gap-2 mb-2">
          <label class="font-medium" for="title">Title:</label>
          <input class="input input-bordered w-full input-sm max-w-xs" type="text" name="title"/>
        </div>
        <div class="flex gap-2 mb-2">
          <label class="font-medium" for="titleUrl">Title url:</label>
          <input class="input input-bordered w-full input-sm max-w-xs" type="text" name="titleUrl"/>
        </div>
        <div class="flex flex-col gap-2 mb-2">
          <label class="font-medium" for="description">Description:</label>
          <input class="textarea textarea-bordered" type="text" name="description"/>
        </div>
        <button class="btn btn-sm btn-primary" type="submit">Add</button>
      </form>
    </div>
  {/if}
  <div class="flex justify-between mt-4">
    <button class="btn btn-sm" on:click={showTypePicker}>back</button>
    <button class="btn btn-sm btn-primary" type="submit">Save</button>
  </div>
</form>
