<script>
  import Toolbar from "$lib/components/Toolbar.svelte";
  import PageEditorStore from "$lib/pageEditorStore";
  import AddRowButton from '$lib/components/addRowButton.svelte';
</script>

<head>
  <title>Edit Page</title>
</head>

<main class="flex flex-col">
  {#each $PageEditorStore as row}
    <Toolbar type="vertical">
      <div class="flex flex-row justify-between">
        {#each row as { content }}
          <Toolbar>
            <div class="px-8 py-2 grow border border-black">
              {content}
            </div>
          </Toolbar>
        {/each}
      </div>
    </Toolbar>
  {/each}
  <div class="flex justify-center">
    <AddRowButton/>
  </div>
</main>
