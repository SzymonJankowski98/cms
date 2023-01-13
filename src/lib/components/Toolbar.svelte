<script>
  export let type = "horizontal";
</script>

<div class="relative [&>.toolbar]:hover:flex grow">
  <slot name="content"/>
  <div class="hidden toolbar absolute {type} top-0 justify-center items-center bg-cyan-500 z-10">
    <slot name="buttons"/>
  </div>
</div>

<style>
  .horizontal {
    @apply left-1/2 -translate-x-1/2;
  }

  .vertical {
    @apply right-0 flex-col;
  }
</style>
