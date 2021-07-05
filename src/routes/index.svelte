<script lang="ts">
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';

  import { shuffleArray } from '../util/arrayUtil';

  const duration = 900;
  let names = [];

  onMount(() => {
    let cycleName = setInterval(() => {
      names = [...names.slice(1), names[0]];
    }, 4000);
    names = shuffleArray([
      'M. Ilman Nafian',
      'Ian',
      'Man',
      'Less',
      'Lesser',
      'LesserMaim',
      'Alerion',
    ]);
    names = [names[0], 'Ilman', ...names.slice(2)];
    return () => clearInterval(cycleName);
  });
</script>

<div class="min-h-screen flex justify-center items-center bg-gray-800">
  <div class="flex flex-col sm:w-1/2 w-screen">
    {#each names.slice(0, 3) as name, i (name)}
      <span
        animate:flip={{ duration }}
        in:fly={{ y: 50, duration }}
        out:fly={{ y: -50, duration }}
        class="text-gray-200 text-5xl"
        class:text-opacity-30={i !== 1}
      >
        {name}
      </span>
    {/each}
  </div>
</div>
