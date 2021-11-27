<script>
  //
  import core from "$lib/core";

  export let level = '1';
  export let type = '';
  export let bold = true;
  export let link;
  export let href;
  export let target;
  export let alt;
  export let text = '';
  const textColor = core.colortypes(type);
</script>
<span class='text-{level}xl block w-full {textColor} {bold? 'font-bold' : 'font-light'}'>
  {#if link}
    <a {href} {target} {alt} class="hover:underline text-blue-500">{text}<slot></slot></a>
  {:else}
  {#if text}
      {text}
  {/if}
    <slot></slot>
  {/if}
</span>