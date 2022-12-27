<script lang="ts">
  import Fa from 'svelte-fa';

  export let icon: any;
  export let action: any;
</script>

<button on:click={action} class="p-1 justify-center items-center">
  <Fa class="text-lg text-white" icon={icon}/>
</button>
