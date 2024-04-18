<script>
     import { Avatar,Search,GradientButton ,Card,DarkMode} from 'flowbite-svelte';
     import { SearchOutline } from 'flowbite-svelte-icons';
     import {isAuthenticated} from '$lib/store'
</script>
{#if isAuthenticated}
<div class="mx-auto max-w-3xl flex justify-between items-center space-x-4 rtl:space-x-reverse ">
     <Avatar src="src\lib\OIP.jpeg" size="xl" rounded />
     <div class="space-y-1 font-medium dark:text-white">
       <div class="mx-32 text-xl  ">Jese Leos</div>
       <div class="text-md flex  text-gray-500 dark:text-gray-400 mx-32">Joined in August 2014</div>
     </div>
   </div>

   <div class="mx-auto max-w-2xl m-11">
     <div class="space-y-4 relative">
       <Card horizontal size="md">
         <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dark Mode</p>
         <div class="absolute top-5 right-32">
           <DarkMode />
         </div>
       </Card>
     </div>
   </div>
   {/if}
             
             