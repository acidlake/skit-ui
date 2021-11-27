<script>
  //
  import core from "$lib/core";

  export let level = '4';
  export let type = '';
  const textColor = core.colortypes(type);
</script>
<span class='text-{level}xl {textColor}'>
  <slot></slot>
</span>