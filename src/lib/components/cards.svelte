<script lang="ts">
  interface Card {
    title: string,
    titleUrl: string,
    description: string
  }

  export let cards: Array<Card>;
  export let fontColor: string;
  export let secondaryFontColor: string;
  export let backgroundColor: string;
  export let cardColor: string;
  export let buttonColor: string;
</script>

<div style="background-color: {backgroundColor}" class="w-full flex gap-4 p-4 flex-wrap justify-center">
  {#each cards as {title, titleUrl, description}}
    <div style="background-color: {cardColor};" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <!-- <a href="#">
          <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a> -->
      <div class="p-5">
        <a href={titleUrl}>
          <h5 style="color: {fontColor}" class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p style="color: {secondaryFontColor}" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a href={titleUrl} style="background-color: {buttonColor}; color: {fontColor}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  {/each}
</div>