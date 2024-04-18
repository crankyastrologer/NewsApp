
<script lang="ts">
    import { P } from 'flowbite-svelte';

    import FCard from "$lib/FeedCard.svelte"
    import SCard from "$lib/ShortCard.svelte"
 
  export let data
 data = data.data
 data.forEach(element => {
  console.log(element)
 });
    </script>


   
        <div class="mx-auto max-w-3xl ">
          
            <P size="2xl">Your feed</P>
        
        </div>
        <div class=" mx-auto my-10  max-w-3xl">
          {#each data as item}
          
          <div class="flex-none mr-6 ">
            <FCard data={item}/>
          </div>
          {/each}
        </div>
        
