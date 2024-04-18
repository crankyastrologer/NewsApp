<script>
    import { goto } from '$app/navigation';
import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
    import { HomeSolid, StarSolid, AdjustmentsVerticalOutline, UserCircleSolid, BookmarkSolid,UserRemoveSolid } from 'flowbite-svelte-icons';
  import {isAuthenticated,userid,sessionToken} from '$lib/store'
    function gohome()
    {
      goto('/')
    }
    function godashboard()
    {
      goto('/dashboard')
    }
    function logout()
    {
      userid.set({});
      sessionToken.set({ token: null, expiry: null });
      isAuthenticated.set(false)
      goto('/login')


    }
  </script>
  


<BottomNav position="fixed" navType="application" classInner="grid-cols-5">
  <BottomNavItem btnName="Home" appBtnPosition="left" on:click={gohome}>
    <HomeSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Home</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="favourite" appBtnPosition="middle">
    <StarSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>favourite</Tooltip>
  </BottomNavItem>
  <div class="flex items-center justify-center">
    <BottomNavItem btnName="Create new item" on:click={logout} appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">
      <UserRemoveSolid class="text-white" />
      <Tooltip arrow={false}>Logout</Tooltip>
    </BottomNavItem>
  </div>
  <BottomNavItem btnName="Settings" appBtnPosition="middle">
    <AdjustmentsVerticalOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Settings</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Profile" appBtnPosition="right" on:click={godashboard} >
    <UserCircleSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Profile</Tooltip>
  </BottomNavItem>
</BottomNav>