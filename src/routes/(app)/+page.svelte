
<script lang="ts">
    import { GradientButton, Img } from 'flowbite-svelte';
    import { P } from 'flowbite-svelte';
    import { Search, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
    </script>

<div class="mx-auto max-w-3xl">
<form class="flex gap-2">
    <Search size="md" />
    <GradientButton class="!p-2.5">
      <SearchOutline class="w-5 h-5" />
    </GradientButton>
        </form></div>    
    <P class="mb-3" weight="light" color="text-gray-950 dark:text-gray-100 max-w-96" justify>welcome
        .</P>
