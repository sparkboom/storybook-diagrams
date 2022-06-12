<script lang="ts">
</script>

<style>

  .d-ctr {
    @apply child:rounded-md child:rounded-md w-3/12 m-6 border gap-1;
  }

  .d-flex {
	  @apply flex flex-wrap border;
  }
</style>

<h1>Hello component!</h1>


<h3>Flex</h3>
<div class="d-flex d-ctr child:bg-gradient-to-r child:from-pink-400 to-pink-500 child:flex-grow">
  <div class="w-4/12">&nbsp;</div>
  <div class="w-4/12">&nbsp;</div>
  <div class="w-3/12">&nbsp;</div>
  <div class="w-2/12">&nbsp;</div>
  <div class="w-4/12">&nbsp;</div>
  <div class="w-3/12">&nbsp;</div>
  <div class="w-3/12">&nbsp;</div>
  <div class="w-2/12">&nbsp;</div>
  <div class="w-2/12">&nbsp;</div>
  <div class="w-3/12">&nbsp;</div>
</div>

<h3>Menu</h3>
<div class="flex flex-wrap m-2 gap-4 w-12/12 child:bg-slate-300 m-3 child:p-2 child:rounded-md child:text-slate-700 child:text-xs">
  <div>home</div>
  <div>service and products</div>
  <div>research</div>
  <div>downloads</div>
  <div>about</div>
  <div>contact</div>
</div>
