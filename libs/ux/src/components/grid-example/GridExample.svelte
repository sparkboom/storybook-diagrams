<script lang="ts">
  import Resizer from '../resizer/Resizer.svelte';

  export let title: string;
  export let style: string;
  export let children: number = 16;
  export let bindWidth: boolean = true;
  export let bindHeight: boolean = false;

</script>

<style>
  .container {
    @apply grid rounded-md gap-1 p-1 border border-lime-300 bg-gradient-to-br from-lime-50 to-lime-100 select-none;
  }
  .container > * {
    @apply rounded-md bg-gradient-to-br from-lime-300 to-lime-500 select-none;
  }

  pre {
    @apply bg-slate-200 p-2 pl-4 border-l border-slate-700 overflow-auto my-3
  }

  pre > code {
    @apply text-xs
  }

</style>

<h3 class="mb-2">{title}</h3>
<pre><code>display: grid;
{style || ''}</code></pre>
<Resizer class="w-40">
  <div class="container" class:w-full={bindWidth} class:h-full={bindHeight} {style} >
    {#each {length: children} as _}<div>&nbsp;</div>{/each}
  </div>
</Resizer>
