<script lang="ts">
	import { onMount } from 'svelte';

  let ele;
  let hResizer;
  let vResizer;
  let hvResizer;

  let mousePos = { x:0, y:0 };
  let eleDims = { w:0, h: 0 };
  let activeResizer = null;

  const mouseDownHandler = function (e) {
    mousePos = {x: e.clientX, y: e.clientY}
    const styles = window.getComputedStyle(ele);
    eleDims = { w: parseInt(styles.width, 10), h: parseInt(styles.height, 10) };
    activeResizer = e.target;

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - mousePos.x;
    const dy = e.clientY - mousePos.y;

    if (activeResizer === hResizer || activeResizer === hvResizer) {
      ele.style.width = `${eleDims.w + dx}px`;
    }
    if (activeResizer === vResizer || activeResizer === hvResizer) {
      ele.style.height = `${eleDims.h + dy}px`;
    }
  };

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

	onMount(() => {
    hResizer.addEventListener('mousedown', mouseDownHandler);
    vResizer.addEventListener('mousedown', mouseDownHandler);
    hvResizer.addEventListener('mousedown', mouseDownHandler);
    return () => {
      hResizer.removeEventListener('mousedown', mouseDownHandler);
      vResizer.removeEventListener('mousedown', mouseDownHandler);
      hvResizer.removeEventListener('mousedown', mouseDownHandler);
    };
  });
</script>

<style>
  .resizer {
    @apply absolute hover:border border-slate-300 hover:bg-slate-200;
  }
</style>

<div bind:this={ele} class="relative hover:border border-slate-400 rounded-md p-1 {$$props.class}">
  <slot>
    <span>Resize me</span>
  </slot>
  <div bind:this={hvResizer} class="resizer cursor-se-resize right-0 bottom-0 h-[5px] w-[5px]"></div>
  <div bind:this={hResizer} class="resizer cursor-col-resize bottom-[5px] right-0 top-0 w-[5px]"></div>
  <div bind:this={vResizer} class="resizer cursor-row-resize right-[5px] left-0 bottom-0 h-[5px]"></div>
</div>
