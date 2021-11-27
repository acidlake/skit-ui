<script>
  import core from "$lib/core";
  export let id = '';
  export let type = '';
  export let level = '1';
  const textColor = core.colortypes(type);
</script>
<p {id} class='text-{level}xl {textColor} p-2 m-2 w-full text-justify'>
  <slot></slot>
</p>