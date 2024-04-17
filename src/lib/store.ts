import {writable} from 'svelte/store'

export const isAuthenticated = writable(false);
export const userid = writable({})
export const sessionToken = writable({})