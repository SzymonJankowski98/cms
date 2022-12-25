<script>
  import Toolbar from "$lib/components/Toolbar.svelte";

  let page = [
    [
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
    ],
    [
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
    ],
    [
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
      { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
    ]
  ];
</script>

<head>
    <title>Edit Page</title>
</head>

<main  class="flex flex-col">
  {#each page as row}
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
</main>
