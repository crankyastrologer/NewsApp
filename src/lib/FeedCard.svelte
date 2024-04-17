<script>
    import { Card} from 'flowbite-svelte';
    import { goto } from '$app/navigation';
   
    export let data
    console.log(data)
    let vCard = false;
    function handle()
    {
      goto(`/article/${data[0]}`)
    }
  </script>
  
  <div  class="space-y-4">
    <Card on:click={handle} reverse={vCard} >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data[1]}</h5>
      
      
    </Card>
    </div>