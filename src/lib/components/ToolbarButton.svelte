<script lang="ts">
  import Fa from 'svelte-fa';

  export let icon: any;
</script>

<button class="p-1 justify-center items-center">
  <Fa class="text-lg text-white" icon={icon}/>
</button>