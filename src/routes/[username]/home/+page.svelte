<script lang="ts">
    let { data, form } = $props();
</script>

<h1 class=" text-black">Fish</h1>

{#each data.users as user}
    <p>{user.name}</p>
{/each}

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<h1 class="text-2xl pt-8">Add User</h1>
<form method="POST" action="?/userAdd">
    <label for="name">Username:</label>
    <input type="text" name="username" value={form?.username ?? ''}>
</form>

<h1 class=" pt-8 text-2xl">Add Items</h1>