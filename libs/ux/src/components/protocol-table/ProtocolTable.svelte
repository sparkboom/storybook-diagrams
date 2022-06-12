<script lang="ts">
  import {Section} from './types';

  export let title;
  export let sections: Section[] | string;
  const octets = [...Array(4)].map((v,i) => i);
  const bits = [...Array(32)].map((v,i) => i);

  const fromStrToArray = sects => sects.split('|')
    .map(s => s.split(','))
    .map(([name,length]) => ({name, length: Number(length)}) );

  const uiSections = [];
  let length = 0;
  let sectionArray = Array.isArray(sections)? sections : typeof sections === 'string'? fromStrToArray(sections) : [];
  sectionArray.forEach(s => {
    if (length % 32 === 0){
      uiSections.push({ type: 'octet', name: length / 8, class: 'text-xs leading-6', length: 1 });
      uiSections.push({ type: 'bit', name: length, class: 'text-xs leading-6', length: 1});
    }
    uiSections.push({ ...s, type: 'section', class: 'bg-slate-50'});
    length += s.length;
  });
</script>

<div class="grid grid-cols-34 bg-slate-100 text-center border border-slate-400 rounded-xl child:border child:border-slate-200 overflow-hidden shadow-md text-slate-700">
  <div class="font-bold col-[1_/_span_34]">{title}</div>
  <div class="col-span-2 text-xs leading-6">Offset</div>
  {#each octets as i}<div class="col-span-8">{i}</div>{/each}
  <div class="text-xs leading-6">Oct</div>
  <div class="text-xs leading-6">Bit</div>
  {#each bits as i}<div class="text-xs leading-6">{i}</div>{/each}
  {#each uiSections as s}<div class={s.class} style={`grid-column: auto / span ${s.length} `} title={s.name}>{s.name}</div>{/each}
</div>
