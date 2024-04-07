<script>
	import "../../app.css";
	import { page } from '$app/stores';
	import {P,Hr, Navbar,Img, NavBrand, NavLi, NavUl, NavHamburger ,Avatar} from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { Search, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
  
  
  
  
  
	$: activeUrl = $page.url.pathname;
  </script>
  

  <Navbar let:NavContainer>
  
	<NavContainer class=" max-w-3xl">
	<NavHamburger />
	<DarkMode size='sm' class=" text-primary-500 dark:text-primary-600 border dark:border-gray-800"/>

	<NavUl {activeUrl}>
	  
	  <NavLi href="/">Home</NavLi>
	  <NavLi href="/projects">Navbar</NavLi>
	  <NavLi href="/contacts">Accordion</NavLi>
	  <NavLi href="/docs/components/alert">Alert</NavLi>
	  <NavLi href="/docs/components/avatar">Avatar</NavLi>
	</NavUl>
	<Avatar src="/src/lib/OIP.jpeg" />
  </NavContainer>
  </Navbar>
  <Hr classHr="w-64 h-1 mx-auto my-4 rounded md:my-10" />
  <slot/>