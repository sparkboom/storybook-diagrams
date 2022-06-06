<script lang="ts">
  const octets = [...Array(4)].map((v,i) => i);
  const bits = [...Array(32)].map((v,i) => i);
	export let title;
</script>

<style>
</style>

<div class="grid grid-cols-32 bg-slate-20s0">
  <div class="font-bold col-span-{32}">{title}</div>
  {#each octets as i}
    <div class="col-span-8">{i}</div>
  {/each}
  {#each bits as i}
    <div>{i}</div>
  {/each}
</div>
