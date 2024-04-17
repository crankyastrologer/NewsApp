<script lang='ts'>
  import { GradientButton, Heading, Span, Input, Textarea } from 'flowbite-svelte';
  import axios from 'axios';
  import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
  import {isAuthenticated,userid,sessionToken} from '$lib/store'
  let show = false;
import * as yup from 'yup';
	import { goto } from '$app/navigation';
let values = {
    email: "",
    password: "",
    
}; 
let errors = {email: "",
    password: "",
    confirmPassword: ""};

  const handleSubmit = async () => {
    try {
      await schema.validate(values, { abortEarly: false });
      alert(JSON.stringify(values, null, 2));
      errors = {email: "",
    password: "",
    confirmPassword: ""};
    console.log("successful")
    axios.post('http://127.0.0.1:5000/login',{
      user:"abc@gmail.com",
  password:"hello world!"
}).then((response:any) => {
      
       // Print the response
       
       isAuthenticated.set(true);

      goto('/')
      // Handle the response data as needed
    }).catch((error:any) => {
      console.error('Error:', error);
    });
    } catch (err:any) {
      errors = err.inner.reduce((acc:any, err:any) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  };
const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};
const schema = yup.object().shape({
  email: yup.string().required("Email is required")
    .email("Email is invalid"),
  password: yup.string().required("Password is required").min(8,"password must have at least 8 charaters").matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });
  const validationResult = schema
    .validate(values, { abortEarly: false })
    .then(() => {
      alert(JSON.stringify(values, null, 2));
    })
    .catch((err) => {
      console.log(err.errors);
    });
</script>
<form on:submit|preventDefault={handleSubmit}>
<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div class="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <Heading tag="h2" class="text-center mb-4">
      <Span gradient>Login</Span>
    </Heading>
    <div class="mb-4">
      <Input id="email" name="email" bind:value={values.email} placeholder="Email" />
      {#if errors.email}
        <span class="error dark:text-white">{errors.email}</span>
      {/if}
    </div>
    <div class="mb-4">
      <Input type={show ? 'text' : 'password'} id="password" placeholder="password" bind:value={values.password}>
      <button slot="left" on:click={() => (show = !show)} class="pointer-events-auto" type='button'>
        {#if show}
          <EyeOutline class="w-6 h-6" />
        {:else}
          <EyeSlashOutline class="w-6 h-6" />
        {/if}
      </button></Input>

      {#if errors.password}
        <span class="error dark:text-white">{errors.password}</span>
      {/if}
    </div>
    
    <GradientButton outline color="purpleToBlue" class="mt-4 w-full" type='submit'>Submit</GradientButton>
  </div>
</div>
</form>
