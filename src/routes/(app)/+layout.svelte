<script>
	import "../../app.css";


  import BottomNav from '$lib/bottom.svelte'
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
  import {isAuthenticated,sessionToken} from '$lib/store'
  export let data
  onMount(()=>{
    
    let isAuthenticatedValue;

    // Subscribe to changes in the isAuthenticated store
    const unsubscribe = isAuthenticated.subscribe(value => {
        isAuthenticatedValue = value;
    });
    if(isAuthenticatedValue==false)
    {goto('/login')}
    let token;
    let expiry
    const unsubscribed = sessionToken.subscribe(value => {
        token = value.token;
        expiry = value.expiry;
    });

    // Unsubscribe when the component is destroyed to prevent memory leaks


    // Function to redirect based on authentication status
    // @ts-ignore
    if(expiry<Date.now())
    goto('/login')

    
  })
    // Example usage:
    
  
  </script>
  

  <slot/>
  <BottomNav/>