import axios from 'axios'
import { isAuthenticated, sessionToken } from '$lib/store'
export async function  load() {
    let isAuthenticatedValue
    let token:any = '';
    console.log("doing")
    const unsubscribed = sessionToken.subscribe(value => {
        token = value.token; // Update token variable when the value changes
    });
    const unsubscribe = isAuthenticated.subscribe(value => {
        isAuthenticatedValue = value;})
    console.log(isAuthenticatedValue)
    if(isAuthenticatedValue)
	{const resp = await axios.post('http://127.0.0.1:5000/getnews',{headers: {
    Authorization: token,
}
      

 
})
console.log(resp.data)
const data = resp.data
return {data}}

else {let data:any = []
    return { data
}}}

