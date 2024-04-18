<script lang='ts'>
  import { GradientButton, Heading, Span, Input, Textarea } from 'flowbite-svelte';
  import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
  import {isAuthenticated,userid,sessionToken} from '$lib/store'
  import { goto } from '$app/navigation';
  import axios from 'axios'
  let show = false;
  let show1 = false;
import * as yup from 'yup';
let values = {
    email: "",
    password: "",
    confirmPassword: ""
    
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
    axios.post('http://127.0.0.1:5000/register',{
      user:values.email,
  password:values.password
}).then((response:any) => {
      
       // Print the response
       const tokenData = JSON.parse(response.data.data);
    // Extract access token and expiry time
      const accessToken = tokenData.access_token;
      const expiryTime = Date.now() + (tokenData.expires_in * 1000);
       console.log(accessToken)
       isAuthenticated.set(true);
       userid.set(response.data.id);
    // Set session token
    sessionToken.set({ token: accessToken, expiry: expiryTime });

      goto('/')
      // Handle the response data as needed
    }).catch((error:any) => {
      console.error('Error:', error);
      alert("email already registered");
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
  confirmPassword: yup.string().required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),});
  const validationResult = schema
    .validate(values, { abortEarly: false })
    .then(() => {
      alert(JSON.stringify(values, null, 2));
    })
    .catch((err) => {
      
    });
</script>
<form on:submit|preventDefault={handleSubmit}>
<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div class="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <Heading tag="h2" class="text-center mb-4">
      <Span gradient>Register</Span>
    </Heading>
    <div class="mb-4">
      <Input id="email" name="email" bind:value={values.email} placeholder="Email" />
      {#if errors.email}
        <span class="error">{errors.email}</span>
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
        <span class="error">{errors.password}</span>
      {/if}
    </div>
    <div class="mb-4">
      <Input type={show1 ? 'text' : 'password'} id="cpassword" placeholder="password" bind:value={values.confirmPassword}>
      <button slot="left" on:click={() => (show1 = !show1)} class="pointer-events-auto" type='button'>
        {#if show1}
          <EyeOutline class="w-6 h-6" />
        {:else}
          <EyeSlashOutline class="w-6 h-6" />
        {/if}
      </button></Input>

      {#if errors.confirmPassword}
        <span class="error">{errors.confirmPassword}</span>
      {/if}
    </div>
    <GradientButton outline color="purpleToBlue" class="mt-4 w-full" type='submit'>Submit</GradientButton>
    <div class='dark:text-white'>or  <a href='/login'>login</a></div>

  </div>
</div>
</form>
