<script lang="ts">
  import Fa from 'svelte-fa';
  import { faEdit, faEye, faSliders, faTrash } from '@fortawesome/free-solid-svg-icons';

  import "../../global.css";
  import { doPostToDeletePage } from '$lib/database/crudFunctions';
  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
    rel="stylesheet"
  />
  <title>Admin Page</title>
</head>

<div class="w-full h-screen flex flex-col">
  <nav class="flex justify-between bg-blue-500 items-center py-2 px-4 h-16">
    <div class="font-mono text-xl font-bold text-white flex gap-2 items-center">
      <Fa class="text-2xl" icon={faSliders}/>
      Admin Panel
    </div>
    <div class="flex items-center ">
      <div class="mr-6 text-white">Signed in as {data.username}</div>
      <form action="/signin">
        <button class="btn">Log out</button>
      </form>
    </div>
  </nav>
  <div class="p-4 bg-cyan-500">
    <form action="/api/newPage" method="POST">
      <input class="input" type="text" name="name" placeholder="page name"/>
      <button class="btn btn-primary ml-2">Create New Page</button>
    </form>
  </div>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th class="text-left">Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each data.userPages as page, index}
            <tr>
              <th class="text-left">{index+1}</th>
              <td class="text-left">{page}</td>
              <td class="flex justify-end gap-2">
                <form action="/page/{page}">
                  <input type="hidden" name="release" value="true" />
                  <button>
                    <Fa class="text-2xl" icon={faEye}/>
                  </button>
                </form>
                <form action="/page/{page}">
                  <button>
                    <Fa class="text-2xl" icon={faEdit}/>
                  </button>
                </form>
                <form action="">
                  <input type="hidden" />
                  <button on:click={() => {
                    doPostToDeletePage(page, data)
                  }}>
                    <Fa class="text-2xl" icon={faTrash}/>
                  </button>
                </form>
              </td>
            </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
