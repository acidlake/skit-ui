<script>
  import { Text } from "$lib/typograhy";
  export let items = [];
</script>
<ul class="list-disc p-6">
  {#if items.length > 0}
    {#each items as item}
      <span class="hidden" id="hack">
      </span>
      <li>
        <Text 
          link={item.link} 
          href={item.href} 
          target={item.tareget} 
          level={item.level}
          bold={item.bold}
          text={item.label}
          />
      </li>
    {/each}
  {/if}
</ul>