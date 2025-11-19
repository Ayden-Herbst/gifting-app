<script lang="ts">
    let { data } = $props();
</script>

{#each data.lists as list}
    <p>{list.name}</p>
    <p>Participants:</p>
    {#each list.participants as person}
        <p>{person.name}</p>
    {/each}
{/each}