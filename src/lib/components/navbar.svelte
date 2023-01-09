<script lang="ts">
  interface Link {
    url: string,
    name: string
  }

  export let title: string;
  export let titleUrl: string;
  export let backgroundColor: string;
  export let fontColor: string;
  export let links: Array<Link>;

  let mobileMenuHidden = true;
</script>

<nav style="background-color: {backgroundColor};" class="w-full border-gray-200 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href={titleUrl} class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" />
        <span style="color: {fontColor};" class="self-center text-xl font-semibold whitespace-nowrap">{title}</span>
    </a>
    <button on:click={()=> mobileMenuHidden = !mobileMenuHidden} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class:hidden={mobileMenuHidden} class="w-full md:block md:w-auto" id="navbar-default">
      <ul style="background-color: {backgroundColor};" class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700">
        {#each links as {url, name}}
          <li>
            <a href={url} style="color: {fontColor};" class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-gray-700 hover:text-white">
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>