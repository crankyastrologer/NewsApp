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
    function handledata()
    {
      const result = data[1].substring("Title: ".length);

      return result
    }
  </script>
  
  <div  class="space-y-4 max-w-2xl flex justify-center">
    <Card on:click={handle} img='src\lib\newsimg.jpeg' reverse={vCard} class="my-5" horizontal size="lg" >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{handledata()}</h5>
      
      
    </Card>
    </div>