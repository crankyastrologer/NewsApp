
<script lang="ts">
    import { GradientButton, Img } from 'flowbite-svelte';
    import { P } from 'flowbite-svelte';
    import { Search, Button } from 'flowbite-svelte';
    import FCard from "$lib/FeedCard.svelte"
    import SCard from "$lib/ShortCard.svelte"
  import { SearchOutline } from 'flowbite-svelte-icons';
  export let data
 data = data.data
 data.forEach(element => {
  console.log(element)
 });
    </script>

<div class="mx-auto max-w-3xl m-11">
<form class="flex gap-2">
    <Search size="md" />
    <GradientButton class="!p-2.5">
      <SearchOutline class="w-5 h-5 " />
    </GradientButton>
        </form></div>    
   
        <div class="mx-auto max-w-3xl ">
          
            <P size="2xl">Your feed</P>
        
        </div>
        <div class=" mx-auto my-10 flex overflow-x-auto max-w-3xl">
          {#each data as item}
          
          <div class="flex-none mr-6 ">
            <FCard data={item}/>
          </div>
          {/each}
        </div>
        <div class="mx-auto  max-w-3xl ">
          
          <P size="2xl">Shorts for you </P>
          <div class=" mx-auto my-10 flex overflow-x-auto max-w-3xl">
            {#each Array(5) as _, index (index)}
            <div class="flex-none mr-6 ">
              <SCard/>
            </div>
            {/each}
          </div>
      </div>
