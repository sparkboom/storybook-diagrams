<script lang="ts">

  export let title;
  export let sections: Section[] | string;
</script>

<style>
  .d-ctr {
    @apply child:rounded-md child:rounded-md w-32 m-6 border gap-1 child:bg-gradient-to-r child:from-lime-400 to-lime-500;
  }
</style>

<h3>Simple Grid</h3>
<ul>
  <li>2-dimensional control</li>
  <li>parent-driven</li>
  <li><li>
</ul>
<p></p>
<div class="d-ctr grid grid-cols-4 grid-rows-4">
  {#each {length: 16} as _, i}<div>&nbsp;</div>{/each}
</div>

<h3>Fixed Columns</h3>
<code class="bg-slate-200 p-2 pl-4 border-l border-slate-700 text-sm">
  grid-template-columns: 2rem 2rem 2rem 2rem;
</code>
<div class="d-ctr grid" style="grid-template-columns: 2rem 2rem 2rem 2rem;">
  {#each {length: 8} as _, i}<div>&nbsp;</div>{/each}
</div>

<code class="bg-slate-200 p-2 pl-4 border-l border-slate-700 text-sm">
  grid-template-columns: repeat(4, 2rem);
</code>
<div class="d-ctr grid" style="grid-template-columns: repeat(4, 2rem);">
  {#each {length: 8} as _, i}<div>&nbsp;</div>{/each}
</div>

<code class="bg-slate-200 p-2 pl-4 border-l border-slate-700 text-sm">
  grid-template-columns: 1 1 1 1;
</code>
<div class="d-ctr grid" style="">
  {#each {length: 4} as _, i}<div>&nbsp;</div>{/each}
</div>

