<script>
  export let type = "horizontal";
</script>

<div class="group relative [&>.toolbar]:hover:flex grow">
  <slot name="content"/>
  <div class="hidden toolbar absolute {type} top-0 justify-center items-center bg-slate-400">
    <slot name="buttons"/>
  </div>
</div>

<style>
  .horizontal {
    @apply left-0;
  }

  .vertical {
    @apply right-0 flex-col;
  }
</style>
