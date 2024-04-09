<script lang="ts">

    import { storedUser } from '$lib/stores';
    import * as Avatar from "$lib/components/ui/avatar";
 
</script>


<div class="fixed top-0 w-full flex justify-between items-center p-4">
    <h2>Hi {$storedUser?.display_name}</h2>
    <Avatar.Root>
        <Avatar.Image src={$storedUser?.images[0].url} alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
</div>