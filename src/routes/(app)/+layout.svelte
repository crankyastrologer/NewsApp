<script>
	import "../../app.css";


  import BottomNav from '$lib/bottom.svelte'
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
  import {isAuthenticated} from '$lib/store'
  onMount(()=>{
    
    let isAuthenticatedValue;

    // Subscribe to changes in the isAuthenticated store
    const unsubscribe = isAuthenticated.subscribe(value => {
        isAuthenticatedValue = value;
    });
    if(isAuthenticatedValue==false)
    {goto('/login')}
  })
    // Example usage:
    
  
  </script>
  

  <slot/>
  <BottomNav/>