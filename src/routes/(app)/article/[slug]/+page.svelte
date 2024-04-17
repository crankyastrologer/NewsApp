<script lang="ts">
    export let data
    data = data.data
    import {Heading,P} from 'flowbite-svelte'
</script>

<div class="mx-auto max-w-3xl ">
    <Heading>{data[0]}</Heading>
    <P>{data[1]}</P>
</div>